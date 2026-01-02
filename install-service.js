const Service = require('node-windows').Service;
const path = require('path');

// Create a new service object
const svc = new Service({
  name: 'Notifica Website',
  description: 'Notifica.nl development website server',
  script: path.join(__dirname, 'service.js'),
  nodeOptions: [],
  workingDirectory: __dirname,
  env: [{
    name: "NODE_ENV",
    value: "production"
  }]
});

// Listen for the "install" event
svc.on('install', function() {
  console.log('Service installed successfully!');
  console.log('Starting service...');
  svc.start();
});

svc.on('start', function() {
  console.log('Service started!');
  console.log('Website available at: http://10.3.152.3:8080');
});

svc.on('error', function(err) {
  console.error('Service error:', err);
});

// Install the service
console.log('Installing Notifica Website service...');
svc.install();
