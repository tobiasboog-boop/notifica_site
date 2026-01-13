"""
Notifica SSH Test API - Cleaned Version
========================================
Dit bestand bevat alleen de SSH test functionaliteit.
Het formulier endpoint is verwijderd omdat de wizard direct naar Azure Logic App stuurt.

Deployment:
1. Kopieer dit bestand naar C:\notifica_api\ op de webserver
2. Hernoem naar notifica_test_api.py (of vervang het bestaande bestand)
3. Herstart de NotificaAPI service

Endpoints:
- POST /api/syntess/sshtest - Test SSH verbinding naar klant server
- GET /api/health - Health check
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import paramiko
import socket

app = Flask(__name__)
CORS(app)

# SSH configuratie
SSH_PORT = 49222
SSH_USER = "notifica"
SSH_TIMEOUT = 10


def test_ssh_connection(host: str, password: str) -> dict:
    """
    Test SSH verbinding naar de opgegeven host.

    Args:
        host: IP-adres of hostname van de klant server
        password: SSH wachtwoord voor de notifica gebruiker

    Returns:
        dict met success status en details
    """
    result = {
        "success": False,
        "host": host,
        "port": SSH_PORT,
        "user": SSH_USER,
        "message": "",
        "details": {}
    }

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    try:
        # Probeer verbinding te maken
        client.connect(
            hostname=host,
            port=SSH_PORT,
            username=SSH_USER,
            password=password,
            timeout=SSH_TIMEOUT,
            allow_agent=False,
            look_for_keys=False
        )

        # Test of we een commando kunnen uitvoeren
        stdin, stdout, stderr = client.exec_command("echo 'Connection successful'")
        output = stdout.read().decode().strip()

        result["success"] = True
        result["message"] = "SSH verbinding succesvol"
        result["details"] = {
            "output": output,
            "connected": True
        }

    except paramiko.AuthenticationException:
        result["message"] = "Authenticatie mislukt - controleer wachtwoord"
        result["details"] = {"error_type": "authentication"}

    except paramiko.SSHException as e:
        result["message"] = f"SSH fout: {str(e)}"
        result["details"] = {"error_type": "ssh_error", "error": str(e)}

    except socket.timeout:
        result["message"] = "Verbinding timeout - server niet bereikbaar of poort geblokkeerd"
        result["details"] = {"error_type": "timeout"}

    except socket.error as e:
        result["message"] = f"Netwerk fout: {str(e)}"
        result["details"] = {"error_type": "network_error", "error": str(e)}

    except Exception as e:
        result["message"] = f"Onverwachte fout: {str(e)}"
        result["details"] = {"error_type": "unknown", "error": str(e)}

    finally:
        client.close()

    return result


@app.route('/api/syntess/sshtest', methods=['POST'])
def syntess_sshtest():
    """
    Test SSH verbinding naar klant server.

    Verwacht JSON body:
    {
        "host": "ip-adres of hostname",
        "password": "ssh wachtwoord"
    }

    Returns JSON met test resultaat.
    """
    try:
        data = request.get_json()

        if not data:
            return jsonify({
                "success": False,
                "message": "Geen JSON data ontvangen"
            }), 400

        host = data.get('host', '').strip()
        password = data.get('password', '')

        if not host:
            return jsonify({
                "success": False,
                "message": "Host is verplicht"
            }), 400

        if not password:
            return jsonify({
                "success": False,
                "message": "Wachtwoord is verplicht"
            }), 400

        # Voer SSH test uit
        result = test_ssh_connection(host, password)

        return jsonify(result)

    except Exception as e:
        return jsonify({
            "success": False,
            "message": f"Server fout: {str(e)}"
        }), 500


@app.route('/api/health', methods=['GET'])
def health_check():
    """
    Health check endpoint voor monitoring.
    """
    return jsonify({
        "status": "healthy",
        "service": "notifica-ssh-api",
        "version": "2.0.0"
    })


if __name__ == '__main__':
    # Development server
    app.run(host='0.0.0.0', port=5000, debug=True)
