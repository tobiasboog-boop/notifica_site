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
- [ ] Canonical URLs correct ingesteld
- [ ] Robots.txt aanwezig en correct
- [ ] Sitemap.xml automatisch gegenereerd

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

*Laatste update: 9 januari 2025*
