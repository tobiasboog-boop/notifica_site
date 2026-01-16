# Instructies voor Claude

## Belangrijkste les: KEEP IT SIMPLE

Tobias heeft een hekel aan:
- GUI-oplossingen (Cloudflare dashboard, Google Sheets UI, etc.)
- Complexe configuraties met API tokens, bindings, permissions
- Technisch gewauwel zonder actie
- Oplossingen die veel stappen vereisen

## Wat wel werkt

1. **Formspree voor formulieren** - Geen setup, registraties komen direct in email
   - Gewoon een fetch naar `https://formspree.io/f/[form-id]`
   - Eerste keer: bevestigingsmail klikken, klaar

2. **Git push = deployment** - Cloudflare Pages deploy automatisch vanaf GitHub

3. **Doe het gewoon** - Niet vragen, niet uitleggen, gewoon doen en pushen

## Vermijd

- Cloudflare KV bindings (vereist GUI of complexe API setup)
- Wrangler CLI login flows
- API token configuraties
- Google Apps Script (vereist GUI)
- Alles wat meer dan 1 handeling van Tobias vraagt

## Aanpak

1. Kies de simpelste oplossing die werkt
2. Implementeer het
3. Commit en push
4. Vertel kort wat er is gedaan

Geen discussie, geen opties, geen technische uitleg tenzij gevraagd.
