# Cloudflare Pages Deployment Guide

Dit document bevat alle instructies voor het deployen van notifica.nl naar Cloudflare Pages.

## Quick Start

### 1. Productie build maken

```bash
# In de notifica_site folder:
npm run build:prod
```

Dit genereert de site in `_site/` **zonder** de `/notifica_site/` prefix.

### 2. Output folder uploaden naar Cloudflare Pages

De `_site/` folder bevat de volledige website inclusief:
- Alle HTML pagina's
- CSS en JavaScript
- Afbeeldingen
- `_redirects` bestand (automatisch verwerkt door Cloudflare)
- `robots.txt`
- `sitemap.xml`

---

## Cloudflare Pages Configuratie

### Via Cloudflare Dashboard

1. **Login:** https://dash.cloudflare.com
2. **Ga naar:** Pages → Create a project
3. **Kies:** Direct Upload (of Connect to Git)

### Build Settings (als je Git gebruikt)

| Setting | Waarde |
|---------|--------|
| Build command | `npm run build:prod` |
| Build output directory | `_site` |
| Root directory | `/` |
| Node.js version | `18` of hoger |

### Environment Variables

Geen environment variables nodig voor de basis site.

---

## Custom Domain Instellen

### Stap 1: Domain toevoegen
1. Ga naar je Pages project → Custom domains
2. Klik "Set up a custom domain"
3. Voer in: `notifica.nl`
4. Klik "Continue"

### Stap 2: DNS configureren
Cloudflare configureert automatisch de DNS records als het domein al in Cloudflare is.

**Handmatig (indien nodig):**
```
Type: CNAME
Name: @
Content: <your-project>.pages.dev
Proxy: Yes (oranje wolk)

Type: CNAME
Name: www
Content: <your-project>.pages.dev
Proxy: Yes (oranje wolk)
```

### Stap 3: WWW redirect
Stel een Page Rule in voor www → non-www redirect:

**Page Rule:**
- URL: `www.notifica.nl/*`
- Setting: Forwarding URL (301)
- Destination: `https://notifica.nl/$1`

---

## Redirects

De redirects worden automatisch verwerkt via het `_redirects` bestand in de root van de build output.

**Locatie:** `_site/_redirects`

**Formaat:**
```
/oude-url  /nieuwe-url  301
```

**Aantal redirects:** ~70 regels covering:
- Oude WordPress URLs
- Kortere aliassen
- Typfouten
- SEO redirects

---

## SSL/HTTPS

Cloudflare Pages biedt automatisch:
- ✅ Gratis SSL certificaat
- ✅ Automatische HTTPS redirect
- ✅ TLS 1.3 support

Geen actie nodig.

---

## Headers

Cloudflare Pages ondersteunt een `_headers` bestand voor custom HTTP headers.

**Optioneel - maak `src/_headers`:**
```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

---

## Checklist Na Deployment

### Direct na livegang

- [ ] Homepage laadt correct op https://notifica.nl
- [ ] Controleer 3-5 belangrijke pagina's
- [ ] Test redirects (oude URLs moeten doorverwijzen)
- [ ] Check mobile weergave
- [ ] Test contactformulier

### Binnen 24 uur

- [ ] Google Search Console: URL-inspectie homepage
- [ ] Google Analytics: Check real-time tracking
- [ ] Test alle navigatie links
- [ ] Check footer links

### Binnen 1 week

- [ ] Search Console: Sitemap indienen
- [ ] Check 404 errors in Cloudflare Analytics
- [ ] Vergelijk laadtijden met oude site

---

## Rollback Plan

Als er iets mis gaat:

1. **Cloudflare Pages:** Ga naar Deployments → klik op vorige deployment → "Rollback to this deployment"

2. **DNS fallback:** Zet DNS records tijdelijk terug naar oude hosting

---

## Troubleshooting

### Probleem: 404 op pagina's

**Oorzaak:** Build zonder `build:prod` (met prefix)

**Oplossing:**
```bash
npm run clean
npm run build:prod
```

### Probleem: Redirects werken niet

**Oorzaak:** `_redirects` niet in root van output

**Oplossing:** Check of `_redirects` in `_site/` staat na build

### Probleem: CSS/JS laadt niet

**Oorzaak:** Verkeerde asset paths

**Oplossing:** Check of `eleventy.config.prod.js` geen pathPrefix heeft

### Probleem: Formulieren werken niet

**Oorzaak:** Pipedrive popup script

**Oplossing:** Check browser console voor JavaScript errors

---

## Nuttige Cloudflare URLs

- Dashboard: https://dash.cloudflare.com
- Pages docs: https://developers.cloudflare.com/pages/
- Redirect docs: https://developers.cloudflare.com/pages/configuration/redirects/

---

## Contact

Bij problemen:
- Technisch: Check Cloudflare Pages deployment logs
- Domein: Check Cloudflare DNS settings

---

*Laatste update: 15 januari 2026*
