# Notifica.nl Migratie Checklist

Dit document bevat alle openstaande punten die besproken moeten worden voordat de nieuwe website live kan gaan.

---

## 1. Verborgen pagina's om te beoordelen

De volgende pagina's staan op de huidige site maar zijn niet via het menu bereikbaar. Bespreek welke pagina's overgenomen moeten worden:

### Landingspagina's / Speciale pagina's
| URL | Omschrijving | Actie | Nieuwe URL |
|-----|--------------|-------|------------|
| `/prijzen-syntess-powerbi/` | Prijzenpagina | [x] Overgenomen | `/prijzen/` |
| `/proefperiode/` | Proefperiode aanvragen | [x] Overgenomen | `/proefperiode/` |
| `/bedrijfsanalysetool/` | Bedrijfsanalysetool | [x] Overgenomen | `/verdieping/bedrijfsanalysetool/` |
| `/referenties/` | Referenties/cases overzicht | [x] Overgenomen | `/referenties/` |
| `/vacatures/` | Vacaturepagina | [x] Overgenomen | `/vacatures/` |

### Diensten/Product pagina's
| URL | Omschrijving | Actie | Nieuwe URL |
|-----|--------------|-------|------------|
| `/datagedreven-werken-sneller-inzicht-meer-groei/` | Datagedreven werken | [x] Overgenomen | `/diensten/datagedreven-werken/` |
| `/volledig-ontzorgd-data-beheer-alles-in-1-oplossing/` | Volledig ontzorgd databeheer | [x] Overgenomen | `/diensten/databeheer/` |
| `/uniform-semantisch-datamodel/` | Semantisch datamodel | [x] Overgenomen | `/diensten/semantisch-datamodel/` |
| `/bouw-zelf-rapporten-in-1-dag/` | Zelf rapporten bouwen | [x] Overgenomen | `/diensten/zelf-rapporten-bouwen/` |
| `/datamigratie/` | Datamigratie dienst | [x] Overgenomen | `/diensten/datamigratie/` |

### Training/Webinar pagina's
| URL | Omschrijving | Actie | Nieuwe URL |
|-----|--------------|-------|------------|
| `/optimaliseer-bedrijfsresultaten-met-power-bi-training/` | Power BI training | [x] Overgenomen | `/training/power-bi/` |
| `/syntess-webinar/` | Syntess webinar | [x] Overgenomen | `/verdieping/webinars/` |
| `/syntess-webinar/presentatie-webinar/` | Webinar presentatie | [x] Overgenomen | `/verdieping/webinars/optimalisatie-winstgevendheid-december-2025/` |
| `/notifica-talks/` | Notifica Talks | [x] Overgenomen | `/notifica-talks/` |

### Overige pagina's
| URL | Omschrijving | Actie | Nieuwe URL |
|-----|--------------|-------|------------|
| `/installatie-syntess/` | Installatie Syntess | [x] Overgenomen | `/installatie-syntess/` |
| `/disclaimer/` | Disclaimer pagina | [x] Overgenomen | `/disclaimer/` |
| `/navigatie-branche-naar-software/` | Navigatie hulppagina | [ ] Te beoordelen | - |
| `/kennisbank-voorbeeld/` | Kennisbank voorbeeld | [ ] Te beoordelen | - |

---

## 2. Redirects

Bij de migratie moeten redirects worden ingesteld voor URL's die veranderen. Dit is cruciaal voor SEO en gebruikerservaring.

### URL-wijzigingen nieuwe site
| Oude URL | Nieuwe URL | Status |
|----------|------------|--------|
| `/over-ons-ontmoet-het-team-van-notifica/` | `/over-ons/` | [ ] Redirect instellen |
| `/faq-antwoord-op-de-30-meest-veelgestelde-vragen/` | `/veelgestelde-vragen/` | [ ] Redirect instellen |
| `/klanten-ervaringen-met-notifica-waardevolle-inzichten/` | `/klanten-ervaringen/` | [ ] Redirect instellen |
| `/whitepapers-leergidsen-voor-installatiebedragen/` | `/inspiratie/whitepapers/` | [ ] Redirect instellen |
| `/krachtige-dashboards-artikelen-en-trends-op-de-blog/` | `/inspiratie/blogs/` | [ ] Redirect instellen |
| `/videohub/` | `/inspiratie/videos/` | [ ] Redirect instellen |
| `/home-power-bi-voor-installatiebedrijven/` | `/` | [ ] Redirect instellen |
| `/privacy-verklaring/` | `/privacy/` | [ ] Redirect instellen |
| `/prijzen-syntess-powerbi/` | `/prijzen/` | [ ] Redirect instellen |
| `/datagedreven-werken-sneller-inzicht-meer-groei/` | `/diensten/datagedreven-werken/` | [ ] Redirect instellen |
| `/volledig-ontzorgd-data-beheer-alles-in-1-oplossing/` | `/diensten/databeheer/` | [ ] Redirect instellen |
| `/uniform-semantisch-datamodel/` | `/diensten/semantisch-datamodel/` | [ ] Redirect instellen |
| `/bouw-zelf-rapporten-in-1-dag/` | `/diensten/zelf-rapporten-bouwen/` | [ ] Redirect instellen |
| `/optimaliseer-bedrijfsresultaten-met-power-bi-training/` | `/training/power-bi/` | [ ] Redirect instellen |
| `/syntess-webinar/` | `/verdieping/webinars/` | [ ] Redirect instellen |
| `/bedrijfsanalyse-tool/` | `/verdieping/bedrijfsanalysetool/` | [ ] Redirect instellen |

### Bedrijfssoftware pagina's
| Oude URL | Nieuwe URL | Status |
|----------|------------|--------|
| `/syntess-dashboards-en-rapportages-live-in-1-dag/` | `/bedrijfssoftware/syntess-atrium/` | [ ] Redirect instellen |
| `/enk-software-razendsnel-ontsloten-met-dashboards/` | `/bedrijfssoftware/enk-software/` | [ ] Redirect instellen |
| `/admicom-inzicht-met-krachtige-dashboards-notifica/` | `/bedrijfssoftware/admicom/` | [ ] Redirect instellen |
| `/acto-inzicht-met-krachtige-dashboards-notifica/` | `/bedrijfssoftware/acto/` | [ ] Redirect instellen |
| `/4ps-inzicht-met-krachtige-dashboards-notifica/` | `/bedrijfssoftware/4ps/` | [ ] Redirect instellen |
| `/bouwinfosys-inzicht-met-krachtige-dashboards-notifica/` | `/bedrijfssoftware/bouwinfosys/` | [ ] Redirect instellen |

### Te beslissen
- [ ] Waar worden redirects ingesteld? (hosting/Cloudflare/Eleventy plugin)
- [ ] 301 (permanent) of 302 (tijdelijk) redirects?
- [ ] Wat te doen met pagina's die niet worden overgenomen? (404 of redirect naar homepage)

---

## 3. SEO & Zoekmachineoptimalisatie

### Google Search Console
- [ ] Eigenaarschap nieuwe domein/site verifiëren
- [ ] Sitemap.xml indienen (wordt automatisch gegenereerd door Eleventy)
- [ ] Oude sitemap vergelijken met nieuwe sitemap
- [ ] Indexeringsstatus controleren na livegang
- [ ] URL-inspectie tool gebruiken voor belangrijke pagina's

### Historische data behouden
- [ ] Oude Search Console property behouden voor historische data
- [ ] Nieuwe property aanmaken voor de vernieuwde site
- [ ] Change of Address tool gebruiken indien domein wijzigt

### Meta tags & SEO elementen
- [x] Title tags per pagina (in frontmatter)
- [x] Meta descriptions per pagina (in frontmatter)
- [x] Open Graph tags voor social sharing (in base layouts)
- [x] Canonical URLs correct ingesteld (in beide base layouts)
- [x] Robots.txt aanwezig en correct (`/robots.txt`)
- [x] Sitemap.xml automatisch gegenereerd (`/sitemap.xml`)

### Huidige SEO status ophalen
- [ ] Exporteer huidige rankings uit Search Console
- [ ] Noteer top 20 best presterende pagina's
- [ ] Noteer belangrijkste zoekwoorden

---

## 4. Google Analytics / Google Tag Manager

### Huidige tracking
- [x] Welke Google Analytics property wordt gebruikt? → **GA4**
- [ ] Wordt Google Tag Manager gebruikt?
- [x] Tracking ID ophalen van huidige site → **G-X93YGT3NLM**

### Migratie opties
| Optie | Omschrijving |
|-------|--------------|
| **Bestaande property behouden** | ✅ Gekozen - Zelfde tracking ID gebruiken, historie blijft behouden |
| Nieuwe property aanmaken | Schone start, geen historie |
| Beide tijdelijk | Oude en nieuwe naast elkaar tijdens transitie |

### Te implementeren
- [x] Google Analytics 4 (GA4) property ID: `G-X93YGT3NLM`
- [x] Tracking code toevoegen aan base template (beide layouts)
- [ ] Event tracking instellen (formulieren, CTA clicks, etc.)
- [ ] Doelen/conversies instellen
- [ ] E-commerce tracking indien nodig

---

## 5. Domein & Hosting

### DNS & Domein
- [ ] Waar wordt notifica.nl gehost? (huidige situatie)
- [ ] Waar wordt de nieuwe site gehost?
- [ ] DNS records aanpassen
- [ ] SSL certificaat regelen
- [ ] WWW vs non-WWW redirect instellen

### Livegang stappen
1. [x] Nieuwe site testen op staging/test domein (GitHub Pages)
2. [ ] Alle redirects configureren
3. [ ] DNS wijzigen naar nieuwe hosting
4. [ ] SSL certificaat activeren
5. [ ] Controleren of alle pagina's werken
6. [ ] Search Console en Analytics controleren

---

## 6. Overige aandachtspunten

### Formulieren
- [x] Pipedrive integratie aanwezig (popup script)
- [ ] Contact formulieren testen
- [ ] Demo aanvraag formulier testen

### Externe integraties
- [ ] Vimeo video embeds werken
- [ ] TeamViewer QuickSupport link klopt
- [ ] Social media links kloppen

### Content
- [x] Alle afbeeldingen aanwezig en geoptimaliseerd
- [ ] Alle interne links werken
- [ ] Alle externe links werken
- [ ] Spelling en grammatica gecontroleerd

### Recente wijzigingen (januari 2025)
- [x] Logo geüpdatet naar transparant SVG (4KB vs 838KB)
- [x] Logo grootte aangepast van 28px naar 48px
- [x] Mark Haring titel gewijzigd naar "Research and Development"

---

## 7. SEO-optimalisatie Aanpak

Dit hoofdstuk beschrijft de methode om alle pagina's volledig te optimaliseren voor zoekmachines.

### SEO Score Methodiek

Elke pagina wordt beoordeeld op basis van de volgende criteria (0-100 punten):

| Criterium | Punten | Beschrijving |
|-----------|--------|--------------|
| **Title tag** | 15 | Uniek, 50-60 karakters, primair zoekwoord vooraan |
| **Meta description** | 15 | Uniek, 150-160 karakters, call-to-action, zoekwoord |
| **H1 heading** | 10 | Eén H1 per pagina, bevat primair zoekwoord |
| **Content kwaliteit** | 15 | Min. 300 woorden, relevante content, geen duplicate |
| **Interne links** | 10 | Links naar relevante pagina's, anchor text geoptimaliseerd |
| **Afbeeldingen** | 10 | Alt-tekst aanwezig, bestandsnaam beschrijvend, WebP formaat |
| **URL structuur** | 10 | Kort, beschrijvend, zoekwoord, geen underscores |
| **Schema markup** | 5 | Structured data (Organization, LocalBusiness, FAQ) |
| **Mobile-friendly** | 5 | Responsive, touch-friendly, geen horizontal scroll |
| **Laadsnelheid** | 5 | < 3 sec, afbeeldingen geoptimaliseerd |

**Score interpretatie:**
- 90-100: Uitstekend geoptimaliseerd
- 75-89: Goed, kleine verbeteringen mogelijk
- 50-74: Matig, optimalisatie nodig
- < 50: Onvoldoende, prioriteit voor verbetering

### Stap-voor-stap Aanpak

#### Fase 1: Inventarisatie (Week 1)

1. **Pagina-audit uitvoeren**
   - [ ] Lijst maken van alle pagina's met huidige SEO score
   - [ ] Exporteer Search Console data (impressies, clicks, CTR, positie)
   - [ ] Identificeer top 20 pagina's op basis van traffic
   - [ ] Noteer pagina's met hoge impressies maar lage CTR (quick wins)

2. **Keyword research**
   - [ ] Primair zoekwoord per pagina bepalen
   - [ ] Secundaire zoekwoorden identificeren
   - [ ] Zoekvolumes en concurrentie analyseren
   - [ ] Keyword mapping: welk zoekwoord hoort bij welke pagina?

3. **Concurrentie analyse**
   - [ ] Top 3 concurrenten identificeren per zoekwoord
   - [ ] Analyseer hun title tags en meta descriptions
   - [ ] Noteer content gaps en kansen

#### Fase 2: Technische SEO (Week 2)

1. **Technische basis** (Afgerond)
   - [x] Sitemap.xml automatisch gegenereerd
   - [x] Robots.txt geconfigureerd
   - [x] Canonical URLs ingesteld
   - [x] HTTPS actief
   - [ ] Core Web Vitals meten en optimaliseren

2. **Structured Data toevoegen**
   - [ ] Organization schema op homepage
   - [ ] LocalBusiness schema met adres/telefoon
   - [ ] BreadcrumbList voor navigatie
   - [ ] FAQ schema op veelgestelde vragen pagina
   - [ ] Article schema voor blog posts
   - [ ] VideoObject schema voor video pagina's

3. **Performance optimalisatie**
   - [ ] Afbeeldingen converteren naar WebP
   - [ ] Lazy loading voor afbeeldingen onder de fold
   - [ ] CSS/JS minificeren
   - [ ] Caching headers instellen

#### Fase 3: On-Page SEO per Pagina (Week 3-4)

Voor elke pagina de volgende checklist doorlopen:

**Title tag optimalisatie**
```
Formaat: [Primair zoekwoord] - [Beschrijving] | Notifica
Voorbeeld: Power BI Dashboards voor Installatiebedrijven | Notifica
```

- [ ] Max 60 karakters
- [ ] Primair zoekwoord aan het begin
- [ ] Uniek per pagina
- [ ] Actiegericht/wervend

**Meta description optimalisatie**
```
Formaat: [Wat bieden we] + [Voor wie] + [Uniek voordeel] + [CTA]
Voorbeeld: Professionele Power BI dashboards speciaal voor installatiebedrijven.
Direct inzicht in projectmarges en efficiency. Live binnen 1 dag. Vraag nu een demo aan.
```

- [ ] 150-160 karakters
- [ ] Bevat primair zoekwoord
- [ ] Duidelijke waardepropositie
- [ ] Call-to-action

**Content optimalisatie**
- [ ] H1 bevat primair zoekwoord
- [ ] H2/H3 structuur logisch
- [ ] Minimaal 300 woorden voor belangrijke pagina's
- [ ] Zoekwoorden natuurlijk verwerkt
- [ ] Interne links naar relevante pagina's

**Afbeeldingen**
- [ ] Alle afbeeldingen hebben alt-tekst
- [ ] Bestandsnamen beschrijvend (bijv. `power-bi-dashboard-syntess.webp`)
- [ ] Gecomprimeerd en juiste formaat

#### Fase 4: Content Strategie (Doorlopend)

1. **Blog strategie**
   - [ ] Content kalender opstellen
   - [ ] Long-tail zoekwoorden identificeren
   - [ ] Evergreen content prioriteren
   - [ ] Interne linking strategie

2. **FAQ uitbreiden**
   - [ ] Veelgestelde vragen uit Search Console halen
   - [ ] "People Also Ask" analyseren
   - [ ] FAQ schema toevoegen

3. **Case studies / Referenties**
   - [ ] Klantverhalen uitbreiden met specifieke resultaten
   - [ ] Screenshots/afbeeldingen toevoegen
   - [ ] Specifieke zoekwoorden targeten (bijv. "Power BI Syntess")

### Prioriteit Matrix

| Pagina Type | Prioriteit | Reden |
|-------------|------------|-------|
| Homepage | Hoog | Meeste traffic, merkbekendheid |
| ERP Koppelingen (Syntess, etc.) | Hoog | Specifieke zoekintentie, conversie |
| Diensten pagina's | Hoog | Commercieel, converterend |
| Blog posts | Medium | Long-tail traffic, autoriteit |
| Over ons, Contact | Laag | Minder zoekvolume |

### SEO Tools & Meetmethoden

**Gratis tools:**
- Google Search Console (rankings, indexering)
- Google Analytics 4 (traffic, gedrag)
- Google PageSpeed Insights (performance)
- Schema Markup Validator (structured data)
- Mobile-Friendly Test

**Betaalde tools (optioneel):**
- Screaming Frog (technische audit)
- Ahrefs/SEMrush (keyword research, backlinks)
- Surfer SEO (content optimalisatie)

### KPI's & Doelen

| Metric | Huidige waarde | Doel (3 maanden) | Doel (6 maanden) |
|--------|----------------|------------------|------------------|
| Organisch verkeer | [ ] meten | +20% | +50% |
| Top 10 keywords | [ ] meten | +5 | +15 |
| Gemiddelde positie | [ ] meten | -2 posities | -5 posities |
| Click-through rate | [ ] meten | +1% | +2% |
| Core Web Vitals | [ ] meten | Alle "Good" | Alle "Good" |

### Pagina SEO Scores (In te vullen)

| Pagina | Score | Title | Meta | Content | Links | Actie |
|--------|-------|-------|------|---------|-------|-------|
| `/` (Homepage) | [ ]/100 | [ ] | [ ] | [ ] | [ ] | - |
| `/over-ons/` | [ ]/100 | [ ] | [ ] | [ ] | [ ] | - |
| `/bedrijfssoftware/syntess-atrium/` | [ ]/100 | [ ] | [ ] | [ ] | [ ] | - |
| `/bedrijfssoftware/4ps/` | [ ]/100 | [ ] | [ ] | [ ] | [ ] | - |
| `/inspiratie/blogs/` | [ ]/100 | [ ] | [ ] | [ ] | [ ] | - |
| `/klanten-ervaringen/` | [ ]/100 | [ ] | [ ] | [ ] | [ ] | - |
| `/prijzen/` | [ ]/100 | [ ] | [ ] | [ ] | [ ] | - |
| _etc._ | | | | | | |

---

## Notities

_Ruimte voor eigen notities tijdens het bespreken:_

**Voltooide pagina's (nieuwe Notion-style):**
- Alle landingspagina's (prijzen, proefperiode, referenties, vacatures)
- Alle diensten pagina's (datagedreven-werken, databeheer, semantisch-datamodel, zelf-rapporten-bouwen, datamigratie)
- Alle training/webinar pagina's (power-bi, webinars, notifica-talks)
- Alle overige pagina's (installatie-syntess, disclaimer)

**Nog te beoordelen:**
- `/navigatie-branche-naar-software/`
- `/kennisbank-voorbeeld/`



---

*Laatste update: 15 januari 2026*

---

## 8. Pre-Livegang Checklist (NIEUW)

### Kritieke stappen voor vanavond

#### A. Code & Build
- [x] Alle SEO optimalisaties doorgevoerd (aria-hidden mobile nav, unieke anchor teksten)
- [x] Site bouwt zonder errors (`npm run build`)
- [x] Alle templates correct (header-notion.njk, footer-notion.njk, base layouts)
- [ ] Finale build maken en testen

#### B. Redirects (KRITIEK - doe dit eerst!)
⚠️ **Zonder redirects verlies je SEO waarde van bestaande pagina's!**

**Waar redirects instellen:**
- Als hosting bij Cloudflare: Page Rules of Bulk Redirects
- Als hosting bij Vercel/Netlify: `_redirects` bestand of `vercel.json`
- Als eigen server: `.htaccess` (Apache) of nginx config

**Minimaal nodig (hoogste prioriteit):**
```
/home-power-bi-voor-installatiebedrijven/ → / (301)
/syntess-dashboards-en-rapportages-live-in-1-dag/ → /bedrijfssoftware/syntess-atrium/ (301)
/over-ons-ontmoet-het-team-van-notifica/ → /over-ons/ (301)
/faq-antwoord-op-de-30-meest-veelgestelde-vragen/ → /veelgestelde-vragen/ (301)
/klanten-ervaringen-met-notifica-waardevolle-inzichten/ → /klanten-ervaringen/ (301)
/privacy-verklaring/ → /privacy/ (301)
```

#### C. DNS & Domein
- [ ] Huidige hosting provider identificeren
- [ ] DNS records voorbereiden (A record of CNAME)
- [ ] SSL certificaat geregeld (vaak automatisch bij Cloudflare/Vercel)
- [ ] WWW vs non-WWW: kies één en redirect de ander

#### D. Google Analytics & Search Console
- [x] GA4 tracking ID: `G-X93YGT3NLM` (behouden)
- [x] Tracking code in templates (via cookie consent)
- [ ] Na livegang: Search Console eigenaarschap verifiëren
- [ ] Na livegang: Sitemap.xml indienen (https://www.notifica.nl/sitemap.xml)

#### E. Formulieren & Integraties
- [x] Pipedrive popup script aanwezig
- [ ] Contact formulier testen na livegang
- [ ] Vimeo embeds testen (video sectie)
- [ ] TeamViewer link testen
- [ ] Social media links testen

#### F. Laatste controles
- [ ] Homepage laadt correct
- [ ] Alle menu links werken
- [ ] Mobile navigatie werkt
- [ ] Footer links werken
- [ ] Contact/CTA buttons werken

---

## 9. Directe Acties Na Livegang

### Dag 1 (direct na livegang)
- [ ] Alle belangrijke pagina's handmatig checken
- [ ] Google Search Console: URL-inspectie op homepage
- [ ] Google Analytics: Real-time check of tracking werkt
- [ ] Test contactformulier (stuur testbericht)
- [ ] Check op console errors (F12 in browser)

### Week 1
- [ ] Search Console: Sitemap indienen
- [ ] Search Console: Indexeringsstatus monitoren
- [ ] Check 404 errors in Search Console
- [ ] Redirects verifiëren (test oude URLs)

### Maand 1
- [ ] SEO score opnieuw meten (Seobility)
- [ ] Rankings monitoren in Search Console
- [ ] Google Reviews blijven verzamelen
- [ ] Backlink strategie voortzetten

---

## 10. Bekende Beperkingen & Acceptatie

### Niet te fixen (accepteren):
| Issue | Reden | Impact |
|-------|-------|--------|
| Server config 0% | GitHub Pages/hosting specifiek | Laag - lost op na DNS wijziging |
| External factors 3% | Backlinks vereisen tijd | Medium - langetermijn werk |
| Canonical naar ander domein | Bewust - wijst naar productie | Geen - is correct gedrag |

### Huidige SEO Score (Seobility):
- **On-page score: 77%** (was ~70%, nu ~77%)
- Meta data: 91%
- Page quality: 100%
- Page structure: 100%
- Links: 88%
- Server: 0% (lost op na livegang)
- External factors: 3% (backlink werk nodig)
