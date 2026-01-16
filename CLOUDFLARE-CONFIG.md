# Cloudflare Configuratie - Notifica Site

## Account Info
- **Account naam**: Notifica
- **Account ID**: `ba147d49a38a703dba01c019046eb2b8`
- **Alternatief Account ID**: `56a79647ffa1976291d58dbf2a735ee4` (Tobias@notifica.nl's Account)

## Pages Project
- **Project naam**: `notifica-site`
- **URL**: https://notifica.nl

## KV Namespace (Webinar Registraties)
- **Namespace naam**: `WEBINAR_REGISTRATIONS`
- **Namespace ID**: `559e40590b7943f999944015e19434a5`
- **Binding naam in code**: `WEBINAR_REGISTRATIONS`

## API Endpoints

### Registratie endpoint
```
POST https://notifica.nl/api/webinar-register
```
Body:
```json
{
  "name": "Naam",
  "email": "email@voorbeeld.nl",
  "bedrijf": "Bedrijfsnaam (optioneel)",
  "date": "donderdag-29" | "vrijdag-30"
}
```

### Registraties bekijken (admin)
```
GET https://notifica.nl/api/webinar-list?key=notifica-webinar-2026
```
Of stel `WEBINAR_ADMIN_KEY` in als environment variable in Cloudflare dashboard.

## Deployment

### Via Cloudflare Dashboard
1. Push naar GitHub main branch
2. Cloudflare Pages bouwt automatisch

### Via Wrangler CLI
```bash
# Eerst inloggen (eenmalig)
npx wrangler login

# Build en deploy
npm run build
npx wrangler pages deploy ./_site --project-name=notifica-site
```

## KV Binding Toevoegen (als nodig)

### Via Cloudflare Dashboard
1. Ga naar: https://dash.cloudflare.com → Workers & Pages → notifica-site → Settings → Bindings
2. Klik "Add" → "KV Namespace"
3. Variable name: `WEBINAR_REGISTRATIONS`
4. KV namespace: selecteer `WEBINAR_REGISTRATIONS`

### Via wrangler.json (al geconfigureerd)
Het bestand `wrangler.json` bevat de KV binding configuratie.

## Bestanden

| Bestand | Functie |
|---------|---------|
| `functions/api/webinar-register.js` | API endpoint voor nieuwe registraties |
| `functions/api/webinar-list.js` | Admin endpoint om registraties te bekijken |
| `src/webinar-stuurinformatie.njk` | Webinar landingspagina met inschrijfformulier |
| `wrangler.json` | Cloudflare configuratie met KV binding |

## Webinar Details (Januari 2026)
- **Titel**: Stuurinformatie in de praktijk
- **Data**: Donderdag 29 januari & Vrijdag 30 januari 2026
- **Tijd**: 12:00 - 12:30
- **Teams links**:
  - Donderdag: `https://teams.microsoft.com/meet/38037240929084?p=nK0H0o6bwdiJrvL238`
  - Vrijdag: `https://teams.microsoft.com/meet/31157454727564?p=bjcOmrv089ThfowSWs`
