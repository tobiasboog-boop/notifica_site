# Notifica.nl Migratie Checklist

Dit document bevat alle openstaande punten die besproken moeten worden voordat de nieuwe website live kan gaan.

---

## 1. Verborgen pagina's om te beoordelen

De volgende pagina's staan op de huidige site maar zijn niet via het menu bereikbaar. Bespreek welke pagina's overgenomen moeten worden:

### Landingspagina's / Speciale pagina's
| URL | Omschrijving | Actie |
|-----|--------------|-------|
| `/prijzen-syntess-powerbi/` | Prijzenpagina | [ ] Overnemen / [ ] Verwijderen |
| `/proefperiode/` | Proefperiode aanvragen | [ ] Overnemen / [ ] Verwijderen |
| `/bedrijfsanalysetool/` | Bedrijfsanalysetool | [ ] Overnemen / [ ] Verwijderen |
| `/referenties/` | Referenties/cases overzicht | [ ] Overnemen / [ ] Verwijderen |
| `/vacatures/` | Vacaturepagina | [ ] Overnemen / [ ] Verwijderen |

### Diensten/Product pagina's
| URL | Omschrijving | Actie |
|-----|--------------|-------|
| `/datagedreven-werken-sneller-inzicht-meer-groei/` | Datagedreven werken | [ ] Overnemen / [ ] Verwijderen |
| `/volledig-ontzorgd-data-beheer-alles-in-1-oplossing/` | Volledig ontzorgd databeheer | [ ] Overnemen / [ ] Verwijderen |
| `/uniform-semantisch-datamodel/` | Semantisch datamodel | [ ] Overnemen / [ ] Verwijderen |
| `/bouw-zelf-rapporten-in-1-dag/` | Zelf rapporten bouwen | [ ] Overnemen / [ ] Verwijderen |
| `/datamigratie/` | Datamigratie dienst | [ ] Overnemen / [ ] Verwijderen |

### Training/Webinar pagina's
| URL | Omschrijving | Actie |
|-----|--------------|-------|
| `/optimaliseer-bedrijfsresultaten-met-power-bi-training/` | Power BI training | [ ] Overnemen / [ ] Verwijderen |
| `/syntess-webinar/` | Syntess webinar | [ ] Overnemen / [ ] Verwijderen |
| `/syntess-webinar/presentatie-webinar/` | Webinar presentatie | [ ] Overnemen / [ ] Verwijderen |
| `/notifica-talks/` | Notifica Talks | [ ] Overnemen / [ ] Verwijderen |

### Overige pagina's
| URL | Omschrijving | Actie |
|-----|--------------|-------|
| `/installatie-syntess/` | Installatie Syntess | [ ] Overnemen / [ ] Verwijderen |
| `/disclaimer/` | Disclaimer pagina | [ ] Overnemen / [ ] Verwijderen |
| `/navigatie-branche-naar-software/` | Navigatie hulppagina | [ ] Overnemen / [ ] Verwijderen |
| `/kennisbank-voorbeeld/` | Kennisbank voorbeeld | [ ] Overnemen / [ ] Verwijderen |

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
- [ ] Controleer title tags per pagina
- [ ] Controleer meta descriptions per pagina
- [ ] Open Graph tags voor social sharing
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
- [ ] Welke Google Analytics property wordt gebruikt? (UA of GA4)
- [ ] Wordt Google Tag Manager gebruikt?
- [ ] Tracking ID ophalen van huidige site

### Migratie opties
| Optie | Omschrijving |
|-------|--------------|
| Bestaande property behouden | Zelfde tracking ID gebruiken, historie blijft behouden |
| Nieuwe property aanmaken | Schone start, geen historie |
| Beide tijdelijk | Oude en nieuwe naast elkaar tijdens transitie |

### Te implementeren
- [ ] Google Analytics 4 (GA4) property ID: `G-XXXXXXXXXX`
- [ ] Tracking code toevoegen aan base template
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
1. [ ] Nieuwe site testen op staging/test domein
2. [ ] Alle redirects configureren
3. [ ] DNS wijzigen naar nieuwe hosting
4. [ ] SSL certificaat activeren
5. [ ] Controleren of alle pagina's werken
6. [ ] Search Console en Analytics controleren

---

## 6. Overige aandachtspunten

### Formulieren
- [ ] Pipedrive integratie testen
- [ ] Contact formulieren testen
- [ ] Demo aanvraag formulier testen

### Externe integraties
- [ ] Vimeo video embeds werken
- [ ] TeamViewer QuickSupport link klopt
- [ ] Social media links kloppen

### Content
- [ ] Alle afbeeldingen aanwezig en geoptimaliseerd
- [ ] Alle interne links werken
- [ ] Alle externe links werken
- [ ] Spelling en grammatica gecontroleerd

---

## Notities

_Ruimte voor eigen notities tijdens het bespreken:_








---

*Laatste update: januari 2025*
