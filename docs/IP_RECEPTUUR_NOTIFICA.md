# Intellectueel Eigendom Receptuur - Data Performance Group

**Document versie:** 3.0
**Datum:** 16 januari 2026
**Status:** Concept voor juridische vastlegging
**Doel:** Beschrijving van de unieke "receptuur" t.b.v. bescherming IP, voorbereiding due diligence/verkoop
**Bronnen:** Aandeelhoudersovereenkomst DPG d.d. 17-12-2025, Syntess Knowledge Base, syntess_analyse repository audit januari 2026

---

## 1. Managementsamenvatting

Dit document beschrijft de intellectuele eigendommen en unieke "receptuur" van de Data Performance Group naar analogie van het **Coca-Cola model**: een geheime formule die waarde vertegenwoordigt en juridisch beschermd dient te worden.

De receptuur bestaat uit de **unieke combinatie en integratie** van:
1. **GRIP-platform** (eeuwigdurende licentie via Dolf Jansonius)
2. **ETL-transformatielogica** (GRIP-scripts specifiek voor installatiebranche)
3. **Domeinspecifieke datamodellen** (SSM - Syntess Semantic Model)
4. **Branche-specifieke business intelligence** (DAX measures)
5. **Gestandaardiseerde rapportage-templates** (Thin & Custom Reports)
6. **Methodologie** voor multi-versie en multi-klant ondersteuning

### Doelen van dit document:
- **Bescherming tegen faillissementsrisico** - IP veiligstellen in holding
- **Voorbereiding op eventuele verkoop** - due diligence gereed
- **Vastlegging van de "receptuur"** - juridische bescherming
- **Basis voor leveringsovereenkomst** - holding → werkmaatschappij

---

## 2. Huidige Juridische Structuur

### 2.1 Vennootschapsstructuur (per 1 september 2025)

*Bron: Aandeelhoudersovereenkomst DPG, Bijlage 1*

```
┌─────────────────────────────────────────────────────────────────┐
│                    AANDEELHOUDERS (elk 25%)                      │
├─────────────────────────────────────────────────────────────────┤
│  GMC Holding B.V.        │ Arthur Gartz    │ KvK: 65500881      │
│  Macjofi B.V.            │ Mark Haring     │ KvK: 81770065      │
│  Fornix Holding B.V.     │ Tobias Boog     │ KvK: [...]         │
│  Jansonius Holding B.V.  │ Dolf Jansonius  │ KvK: [...]         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│              DATA PERFORMANCE GROUP B.V. (Holding)               │
│                        KvK: 85392405                             │
│              Kerkhofstraat 21, 5554 HG Valkenswaard              │
│                                                                  │
│  Bezit:                                                          │
│  ├─ Eeuwigdurende gratis GRIP-licentie (ingebracht door Dolf)   │
│  └─ 100% aandelen in dochtermaatschappijen                      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                 DOCHTERMAATSCHAPPIJEN (100% DPG)                 │
├─────────────────────────────────────────────────────────────────┤
│  Notifica B.V.           │ KvK: 81772645   │ BI Installatiebranche│
│  BisQQ B.V.              │ KvK: 81776217   │                     │
│  Boostin Consultancy B.V.│ KvK: 73318310   │                     │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Taakverdeling Bestuur (Artikel 3.2)

| Bestuurder | Holding | Verantwoordelijkheid |
|------------|---------|---------------------|
| Arthur Gartz (GMC) | GMC Holding B.V. | Consultancy, Marketing, Sales |
| Tobias Boog (Fornix) | Fornix Holding B.V. | Consultancy, Marketing, Sales |
| Mark Haring (Macjofi) | Macjofi B.V. | Techniek |
| Dolf Jansonius | Jansonius Holding B.V. | Techniek, verdere uitbouw GRIP |

---

## 3. GRIP-licentie: De Kern van de Receptuur

### 3.1 Definitie (Artikel 1.2 Aandeelhoudersovereenkomst)

> *"GRIP: De ETL-tool zoals ontwikkeld door Dolf Jansonius, waarvan de eeuwigdurende, gratis licentie voor alle activiteiten onder DPG Groep en haar dochtermaatschappijen wordt ingebracht door Jansonius Holding."*

### 3.2 Intellectueel Eigendom GRIP (Artikel 12.4)

**Kernpunten:**

| Aspect | Status |
|--------|--------|
| **Eigendom GRIP-software** | Blijft bij Dolf Jansonius (persoonlijk) |
| **Licentie voor DPG** | Eeuwigdurend en gratis |
| **Scope licentie** | Alle activiteiten DPG Groep + dochtermaatschappijen |
| **Tegenprestatie** | 25% aandelenbelang DPG (via Jansonius Holding) |
| **Escrow** | Broncode bij Enshore B.V. (onafhankelijk) |

### 3.3 Exit-scenario's Dolf Jansonius

**Good Leaver (vertrek in goed overleg):**
- Managementvergoeding eindigt conform Artikel 4
- Jansonius Holding ontvangt **vaste licentievergoeding van €4.000/maand** zolang Notifica B.V. GRIP gebruikt
- Notifica behoudt recht om op ieder moment naar GRIP-alternatief te migreren

**Bad Leaver (vertrek na conflict):**
- Jansonius Holding behoudt recht op dezelfde vaste licentievergoeding (€4.000/maand)
- Zelfde voorwaarden als good leaver

### 3.4 Continuïteitswaarborgen

1. **Escrow-regeling**: Broncode GRIP wordt opgeslagen in centraal repository bij Enshore B.V.
2. **Toegang DPG-ontwikkelaars**: Gewaarborgd voor continuïteit en doorontwikkeling
3. **Toekomstige openstelling**: Onderzoek naar mogelijkheid van (gedeeltelijke) MIT-licentie voor community-opbouw, onafhankelijkheid en AI-toepassing

---

## 4. Overzicht IP-Assets en Eigendom

### 4.1 Asset-matrix

| # | Asset | Juridisch Eigenaar | Beschermingsvorm | Waarde-indicatie |
|---|-------|-------------------|------------------|------------------|
| 1 | **GRIP Software** | Dolf Jansonius | Licentie aan DPG | 25% aandelenbelang DPG |
| 2 | **GRIP ETL-scripts Syntess** | DPG/Notifica | **Know-how** + auteursrecht op code | Gecodificeerde domeinkennis |
| 3 | **SSM (Semantic Model)** | DPG/Notifica | **Know-how** + auteursrecht op code | Branche-specifiek datamodel |
| 4 | **DAX Measures bibliotheek** | DPG/Notifica | **Know-how** (formules = methodologie) | Business logic |
| 5 | **Thin/Custom Reports** | DPG/Notifica | **Know-how** + auteursrecht op ontwerp | Bewezen best practices |
| 6 | **Methodologie & Domeinkennis** | DPG/Notifica | **Bedrijfsgeheim** (Art. 11 AHO) | Jarenlange opbouw |

### 4.2 Onderscheid GRIP vs. Notifica-IP

**Belangrijk onderscheid:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    GRIP SOFTWARE (Platform)                      │
│                                                                  │
│  Eigendom: Dolf Jansonius                                       │
│  Licentie: Eeuwigdurend + gratis voor DPG                       │
│  Functie: ETL-engine (extractie, transformatie, laden)          │
│                                                                  │
│  = Het "voertuig"                                                │
└─────────────────────────────────────────────────────────────────┘
                              +
┌─────────────────────────────────────────────────────────────────┐
│              NOTIFICA IP (Scripts, Models, Reports)              │
│                                                                  │
│  Eigendom: DPG/Notifica (volledig)                              │
│  Functie: Branche-specifieke implementatie                      │
│                                                                  │
│  Onderdelen:                                                     │
│  ├─ ETL-scripts (SQL-transformaties voor Syntess)               │
│  ├─ SSM datamodel (100+ tabellen, relaties)                     │
│  ├─ DAX measures (200+ business KPI's)                          │
│  ├─ Reports (Thin + Custom)                                     │
│  └─ Methodologie en documentatie                                │
│                                                                  │
│  = De "route" en "bestemming"                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Analogie:** GRIP is de auto, de Notifica-scripts zijn de routekaart en de chauffeur met lokale kennis. Zonder de routekaart is de auto nutteloos voor deze specifieke bestemming.

---

## 5. Gedetailleerde Beschrijving van de Receptuur

### 5.1 Component 1: ETL-Transformatielogica (GRIP-scripts)

#### Wat is het?
Een verzameling van **8 sequentiële ETL-scripts** (5 Prepare + 3 Endview) die data uit Syntess ERP (Firebird database) transformeren naar een gestandaardiseerd Data Warehouse (PostgreSQL).

#### Waarom is dit uniek/waardevol?

1. **Versie-onafhankelijke extractie**: De scripts detecteren automatisch de Syntess-versie (8.x, 9.x, etc.) en passen de SQL-queries aan. Dit vereist diepgaande kennis van de evolutie van het Syntess datamodel over meerdere jaren.

2. **Klant-specifieke varianten**: Binnen de scripts zijn A/B-varianten ingebouwd voor klanten met afwijkende bedrijfsprocessen, terwijl de output gestandaardiseerd blijft.

3. **Branche-specifieke transformaties**: De logica is specifiek ontwikkeld voor de installatiebranche (klimaat, elektrotechniek, service & onderhoud) met begrip van:
   - Werkbonstructuren en -paragrafen
   - Service-orders en onderhoudsplanning
   - Projectmagazijnen vs. standaardmagazijnen
   - Kostencategorieën (Arbeid/Materiaal/Materieel/Overig)
   - Calculaties en offertes

4. **Standaardisatie-principe**: Ongeacht bronversie of klantvariant levert het ETL-proces **altijd dezelfde outputstructuur** op. Dit is essentieel voor schaalbaarheid.

#### Concrete assets (geauditeerd januari 2026):
- `syntess_prepare_fase1.grp` (210 KB) - Initiële Firebird data import
- `syntess_prepare_fase2.grp` (34 KB) - Eerste transformaties
- `syntess_prepare_fase3.grp` (15 KB) - Data verrijking
- `syntess_prepare_fase4.grp` (40 KB) - Complexe berekeningen
- `syntess_prepare_fase5.grp` (7.5 KB) - Finale views
- `syntess_endviews_fase1.grp` (139 KB) - Basis endviews
- `syntess_endviews_fase2.grp` (111 KB) - Complexe endviews
- `syntess_endviews_fase3.grp` (14 KB) - SSM integratie (notifica schema)
- `syntess_maatwerk.grp` (28 KB) - Klant-specifieke ETL logica

#### Geauditeerde omvang:
- **9 GRIP-scripts** met totaal **599 KB** aan broncode (~60.000 regels)
- **188 prepare tabellen** (140 KB SQL definitie, ~4.024 regels)
- **26 prepare views** (135 KB SQL definitie, ~2.584 regels)
- **241 endviews** verdeeld over 9 functionele schema's (259 KB, ~6.178 regels)
- Ondersteuning voor **8+ Syntess ERP versies** binnen dezelfde script-set
- Jarenlange opgebouwde domeinkennis gecodificeerd

---

### 5.2 Component 2: Syntess Semantic Model (SSM)

#### Wat is het?
Een uitgebreid **Power BI Semantic Model** (de "kubus") dat als centrale databron dient voor alle rapportages. Het model bevat:
- 100+ tabeldefinities
- Complexe relatiestructuren
- Business logic in DAX

#### Waarom is dit uniek/waardevol?

1. **Branche-specifiek stermodel**: Het datamodel is specifiek ontworpen voor de installatiebranche met:
   - Projecthiërarchieën (Project → Werkbon → Paragraaf)
   - Service-dimensies (Installaties, Installatiesoorten, Objecten)
   - Financiële dimensies (Kostensoorten, Kostenplaatsen, Rubrieken)
   - Voorraaddimensies (Magazijnen → Locaties → Posities)

2. **Multi-administratie ondersteuning**: Ondersteuning voor holdings met meerdere administraties/bedrijven.

3. **Kalender-intelligentie**: Meerdere kalender-implementaties voor verschillende datumcontexten:
   - Boekdatum, Factuurdatum, Opdrachtdatum, Vervaldatum
   - Historische analyse vs. actuele standen

4. **Actieve/Inactieve relaties**: Geavanceerde relatiestructuur met bewuste keuzes voor actieve vs. inactieve relaties om flexibele analyse mogelijk te maken.

#### Concrete assets (geauditeerd januari 2026):
- `SSM_Postgres/` - **257 TMDL-bestanden** (Power BI Tabular Model Definition Language)
- `relationships.tmdl` - **239 relatiedefinities**
- `model.tmdl` - Modelconfiguratie
- `SSM_ADF_Legacy/` - Verouderde Azure Data Factory variant (bewaard voor referentie)

#### Geauditeerde omvang:
- **148 tabellen/dimensies** volledig gedocumenteerd
- **239 relaties** met geavanceerde actief/inactief patronen
- **5 Business Perspectives**: Financieel, HR, Projecten, Service, Commercieel
- **1.031+ DAX measures** verdeeld over alle tabellen
- 1000+ uren ontwikkeling en verfijning

---

### 5.3 Component 3: DAX Measures Bibliotheek

#### Wat is het?
Een verzameling van **gestandaardiseerde DAX-formules** (measures) die business logic implementeren voor de installatiebranche.

#### Waarom is dit uniek/waardevol?

1. **Branche-specifieke KPI's**:
   - Voorraad: Stand, Omloopsnelheid, Min/Max-bewaking, Dagen voorraad
   - Service: Uitvoertijd, Productiviteit, SLA-bewaking
   - Projecten: Voortgang, Marge, WvB (Werk van Bijzondere aard)
   - Financieel: Resultaatbepaling, Cashflow, Debiteuren/Crediteuren

2. **Technische complexiteit**:
   - `USERELATIONSHIP()` voor inactieve relaties
   - Time-intelligence functies (YTD, MoM, YoY)
   - Iteratieve berekeningen (SUMX, AVERAGEX)
   - Dynamische aggregatie op verschillende granulariteitsniveaus

3. **Gestandaardiseerde naamgevingsconventies**: Consistent en voorspelbaar voor eindgebruikers.

#### Concrete assets (geauditeerd januari 2026):
- **SSM measures tabel** met metadata voor alle measures inclusief hiërarchische folderstructuur (6 nesting levels)
- Measures in SSM tabeldefinities per domein
- Documentatie per measure met visibility controls

#### Geauditeerde omvang:
- **1.031+ measures** (geen schatting, exact geteld uit TMDL-bestanden)
- Verdeeld over **148 tabellen** met gestructureerde folderindeling
- Categorieën: Voorraad, Service, Projecten, Financieel, HR, Commercieel
- Time-intelligence functies (YTD, MoM, YoY) standaard geïmplementeerd

---

### 5.4 Component 4: Rapportage-templates (Thin & Custom Reports)

#### Wat is het?
Kant-en-klare Power BI rapportages die direct inzetbaar zijn bij klanten.

#### Waarom is dit uniek/waardevol?

1. **Thin Reports** (15 productie-rapportages die de SSM als databron gebruiken):
   - Finance - Forecast Resultaatrekening
   - Projectwaardering - Project control valuation
   - Urenrapportage - Urenregistratie overzicht
   - Projectbeheer - Project management dashboards
   - S&O - Openstaande werkbonnen
   - S&O - Onderhoudsplanning
   - S&O - Rendement (Service performance)
   - S&O - Uitvoering (Servicedesk)
   - Openstaande posten - Debiteuren/Crediteuren
   - Kasstroomoverzicht - Cash flow reporting
   - Sales & Offerte - Verkoopkansen en offertes
   - Portefeuille management - Forecast project costs/revenue
   - Voorraad - Inventory reporting
   - Inkoop - Procurement reporting
   - Omzet - Revenue reporting

2. **Custom Reports**: Maatwerk framework voor klant-specifieke rapportages met eigen semantic models.

3. **Bewezen best practices**: Visualisaties, layouts en interacties geoptimaliseerd op basis van klantfeedback.

#### Concrete assets (geauditeerd januari 2026):
- `Reports/Thin_Reports/` - **15 standaard rapportages** (TMDL-format)
- `Reports/Custom_Reports/` - Maatwerk framework (template-structuur)
- **17 rapport-definitiebestanden** in TMDL-format
- Rapport-documentatie (`.md` bestanden)

---

### 5.5 Component 5: Methodologie en Domeinkennis

#### Wat is het?
De opgebouwde kennis en methodologie voor implementatie, onderhoud en doorontwikkeling.

#### Waarom is dit uniek/waardevol?

1. **Implementatiemethodologie**: Bewezen aanpak voor:
   - Initiële data-extractie en validatie
   - Klant-onboarding
   - Performance-optimalisatie
   - Foutafhandeling en monitoring

2. **Onderhoudsprocessen**:
   - Versie-updates bij nieuwe Syntess releases
   - Maatwerk-aanvraag triage
   - Quality assurance

3. **Knowledge Base**: Gedocumenteerde kennis over:
   - Syntess datamodel per versie
   - Bekende issues en workarounds
   - Best practices

#### Concrete assets (geauditeerd januari 2026):
- `README.md` (26 KB) - Architectuur documentatie
- `USAGE_GUIDE.md` (9.5 KB) - LLM/AI usage instructies
- `ETL_Scripts/README.md` - ETL structuur uitleg
- `RAPPORT_*.md` - Analyse rapporten
- **~1.900 pagina's** Syntess ERP documentatie (v6.6 + v7.3)
- Interne kennisdatabase geoptimaliseerd voor AI/LLM consumptie

---

## 6. Waardebepaling

### 6.1 GRIP-licentie Waarde

**Transactie:**
- Dolf Jansonius (via Jansonius Holding) bracht eeuwigdurende GRIP-licentie in
- In ruil voor **25% aandelenbelang in DPG**
- Dit was een **transactie met gesloten beurs** (geen cash)

**Waarde-indicatie:**
- De waarde van de GRIP-licentie = waarde van 25% DPG-aandelen op transactiemoment
- Dit impliceert dat de licentie een significante waarde vertegenwoordigt
- Bij eventuele verkoop of due diligence is dit een meetbaar referentiepunt

### 6.2 Notifica-ontwikkelde IP Waarde

**Unieke waardepropositie:**
Het geheel is meer dan de som der delen. De **combinatie** van:
- Platform (GRIP)
- Transformatielogica (ETL-scripts)
- Datamodel (SSM)
- Business logic (DAX)
- Rapportages

...creëert een **end-to-end oplossing** voor Business Intelligence in de installatiebranche die niet eenvoudig te repliceren is.

**Waarom is dit geen "bij elkaar geklikte functionaliteit"?**

1. **Domeinkennis**: Jarenlange ervaring met Syntess en de installatiebranche gecodificeerd
2. **Versie-compatibiliteit**: Ondersteuning voor meerdere Syntess-versies vereist continue onderhoud en expertise
3. **Standaardisatie**: Het principe van gestandaardiseerde output ondanks variabele input is een architecturele keuze die waarde toevoegt
4. **Integratie**: De naadloze koppeling van alle componenten is niet triviaal

---

## 7. Gewenste Structuur voor IP-bescherming

### 7.1 Huidige situatie

IP zit verspreid:
- GRIP-licentie: formeel bij DPG (via aandeelhoudersovereenkomst)
- Notifica-scripts/models: impliciet bij Notifica B.V.

### 7.2 Gewenste situatie

Alle IP expliciet bij DPG Groep:

```
┌─────────────────────────────────────────────────────────────────┐
│              DATA PERFORMANCE GROUP B.V. (Holding)               │
│                                                                  │
│  Eigenaar van:                                                   │
│  ├─ Eeuwigdurende GRIP-licentie (✓ reeds vastgelegd)            │
│  ├─ ETL-scripts Syntess (→ over te dragen van Notifica)         │
│  ├─ SSM Datamodel (→ over te dragen van Notifica)               │
│  ├─ DAX Measures bibliotheek (→ over te dragen van Notifica)    │
│  ├─ Rapportage-templates (→ over te dragen van Notifica)        │
│  └─ Methodologie-documentatie (→ over te dragen van Notifica)   │
│                                                                  │
│                    ↓ Licentieovereenkomst ↓                      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      NOTIFICA B.V. (Werkmaatschappij)            │
│                                                                  │
│  Gebruiksrecht op:                                               │
│  ├─ GRIP-licentie (via DPG)                                     │
│  ├─ Alle DPG-IP (gelicentieerd van DPG)                         │
│                                                                  │
│  Uitvoering van:                                                 │
│  ├─ Klantenservice en implementatie                             │
│  ├─ Doorontwikkeling (nieuwe IP → automatisch naar DPG)         │
│  └─ Operationele dienstverlening                                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 7.3 Bescherming tegen risico's

**Bij faillissement Notifica B.V.:**
- IP blijft eigendom van DPG Groep (holding)
- Curator kan geen beslag leggen op IP
- DPG kan doorondernemen (nieuwe werkmaatschappij oprichten, of verkoop aan derde)

**Bij verkoop Notifica B.V.:**
- **Optie A**: IP blijft bij DPG; koper krijgt licentie via Notifica
- **Optie B**: IP wordt meeverkocht (tegen meerprijs)
- Due diligence is voorbereid: alle IP gedocumenteerd

---

## 8. Benodigde Juridische Documenten

### 8.1 Leveringsakte IP (Notifica → DPG)

**Doel:** Formele overdracht van Notifica-ontwikkelde IP naar DPG

**Inhoud:**
- Beschrijving van over te dragen IP (scripts, models, measures, reports, documentatie)
- Verklaring dat IP vrij is van rechten derden
- Eventuele vergoeding (kan €0 zijn bij interne overdracht)

### 8.2 Licentieovereenkomst (DPG → Notifica)

**Doel:** Formeel gebruiksrecht voor Notifica op DPG-IP

**Inhoud:**
- Eeuwigdurend (of langdurig) gebruiksrecht
- Recht op doorontwikkeling (met IP-rechten automatisch naar DPG)
- Eventuele exclusiviteitsclausule
- Royalty/licentievergoeding structuur (optioneel, voor arm's length pricing)

### 8.3 Aanvulling op Aandeelhoudersovereenkomst (optioneel)

**Doel:** Expliciteren dat alle Notifica-IP bij DPG hoort

---

## 9. Aanbevelingen

### 9.1 Korte termijn (1-3 maanden)
1. ✓ **GRIP-licentie reeds vastgelegd** in Aandeelhoudersovereenkomst Art. 12.4
2. **Inventariseer alle broncode** - Complete lijst van alle scripts, models, measures
3. **Documenteer de receptuur** - Dit document uitbreiden met exacte bestandslijsten

### 9.2 Middellange termijn (3-6 maanden)
4. **Leveringsakte opstellen** - Juridische overdracht IP Notifica → DPG
5. **Licentieovereenkomst opstellen** - DPG → Notifica
6. **Waardebepaling** - Eventueel externe waardering voor fiscale optimalisatie

### 9.3 Juridische overwegingen: Beschermingsvormen

**Belangrijk:** De receptuur is primair te beschermen als **know-how/bedrijfsgeheim**, niet als auteursrechtelijk beschermd werk. Dit onderscheid is juridisch relevant:

| Beschermingsvorm | Wat het beschermt | Wat het NIET beschermt | Toepassing op Notifica |
|------------------|-------------------|------------------------|------------------------|
| **Know-how / Bedrijfsgeheim** | De kennis, methodologie, inzichten | Niets (zolang geheim gehouden) | **Primaire bescherming** - de "receptuur" |
| **Auteursrecht** | De specifieke code-uitdrukking | Onderliggende ideeën, methodologie | **Aanvullend** - op broncode zelf |
| **Databankrecht** | Gestructureerde verzameling | De losse elementen | **Mogelijk** - op schema-definities |

**Waarom know-how de juiste beschermingsvorm is:**

1. **De waarde zit in de kennis, niet in de code**
   - De kennis dat kolom X in Syntess 8.x anders gejoind moet worden dan in 9.x
   - De inzichten over hoe de installatiebranche projecten structureert
   - De ervaring welke KPI's relevant zijn voor service-afdelingen

2. **Auteursrecht beschermt alleen de uitdrukking**
   - Iemand kan dezelfde functionaliteit nabouwen met andere code
   - De methodologie is dan niet beschermd
   - Alleen de letterlijke kopie is verboden

3. **Know-how vereist actieve geheimhouding**
   - Reeds geregeld in Art. 11 Aandeelhoudersovereenkomst
   - Geheimhoudingsclausules in arbeidsovereenkomsten
   - Toegangsbeperking tot broncode

**Aanbeveling:** Positioneer de receptuur als **bedrijfsgeheim/know-how** met auteursrecht als aanvullende bescherming op de specifieke broncode.

---

## 10. Bijlagen

### Bijlage A: Inventarislijst IP-assets (Geauditeerd januari 2026)

| # | Asset | Type | Omvang | Locatie | Status |
|---|-------|------|--------|---------|--------|
| 1 | GRIP Licentierecht | Licentie | Eeuwigdurend | Aandeelhoudersovereenkomst Art. 12.4 | ✓ Vastgelegd |
| 2 | syntess_prepare_fase1-5.grp | ETL Script | 306 KB (5 scripts) | ETL_Scripts/ | Eigendom Notifica |
| 3 | syntess_endviews_fase1-3.grp | ETL Script | 264 KB (3 scripts) | ETL_Scripts/ | Eigendom Notifica |
| 4 | syntess_maatwerk.grp | ETL Script | 28 KB | ETL_Scripts/ | Eigendom Notifica |
| 5 | SSM_Postgres | Semantic Model | 257 TMDL-bestanden | Standard_Semantic_Models/ | Eigendom Notifica |
| 6 | DAX Measures | DAX Library | 1.031+ measures | In SSM tabeldefinities | Eigendom Notifica |
| 7 | DWH Schema definities | SQL | 534 KB (3 bestanden) | DWH_Schema/ | Eigendom Notifica |
| 8 | Thin_Reports | Power BI | 15 rapportages | Reports/Thin_Reports/ | Eigendom Notifica |
| 9 | Custom_Reports Framework | Power BI | Template-structuur | Reports/Custom_Reports/ | Eigendom Notifica |
| 10 | ERP Documentatie | Knowledge Base | ~1.900 pagina's | ERP_Documentation/ | Eigendom Notifica |
| 11 | Repository Documentatie | Markdown | 35+ KB | README.md, USAGE_GUIDE.md | Eigendom Notifica |

**Totale omvang repository:** 301 MB, 2.845 bestanden

### Bijlage B: Architectuurdiagram

```
┌─────────────────────────────────────────────────────────────────┐
│ BRON: Syntess ERP (Firebird Database)                           │
│ [Eigendom klant - buiten scope IP]                              │
└─────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ ETL LAAG: GRIP Platform + Notifica Scripts                      │
│ ┌─────────────────────┐  ┌─────────────────────────────────────┐│
│ │ GRIP Software       │  │ Notifica ETL Scripts (IP!)          ││
│ │ [Eigendom Dolf]     │  │ - Prepare 1-5                       ││
│ │ [Licentie → DPG]    │  │ - Endview 1-3                       ││
│ │                     │  │ - Maatwerk scripts                  ││
│ └─────────────────────┘  └─────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ DATA WAREHOUSE: PostgreSQL                                       │
│ [Schema: gestandaardiseerd door Notifica IP]                    │
│ - Prepare schema (tussentabellen)                               │
│ - Endview schemas (output views)                                │
└─────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ SEMANTIC LAAG: SSM (Notifica IP!)                               │
│ - 100+ tabeldefinities                                          │
│ - Relatiestructuur                                              │
│ - DAX Measures bibliotheek                                      │
└─────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ PRESENTATIE LAAG: Power BI Reports (Notifica IP!)               │
│ - Thin Reports (standaard)                                      │
│ - Custom Reports (maatwerk)                                     │
└─────────────────────────────────────────────────────────────────┘
                            │
                            ▼
                    Eindgebruikers (Klanten)
```

### Bijlage C: Relevante Artikelen Aandeelhoudersovereenkomst

**Artikel 1.2 - Definitie GRIP:**
> "GRIP: De ETL-tool zoals ontwikkeld door Dolf Jansonius, waarvan de eeuwigdurende, gratis licentie voor alle activiteiten onder DPG Groep en haar dochtermaatschappijen wordt ingebracht door Jansonius Holding."

**Artikel 12.4 - Intellectueel Eigendom GRIP-technologie:**
- Eeuwigdurende, gratis licentie voor DPG + dochtermaatschappijen
- Intellectueel eigendom blijft bij Dolf Jansonius
- Good/bad leaver: €4.000/maand licentievergoeding
- Escrow bij Enshore B.V.
- Onderzoek naar MIT-licentie voor openstelling

**Artikel 11 - Geheimhouding:**
- Volledige geheimhouding vertrouwelijke informatie
- Geldt ook na beëindiging betrokkenheid

---

### Bijlage D: Complexiteitsindicatoren (IP-waarde onderbouwing)

| Dimensie | Metriek | Betekenis |
|----------|---------|-----------|
| Data Model Complexiteit | 1.031+ DAX measures | Enterprise-grade analytics platform |
| Schema Complexiteit | 241 endviews over 9 domeinen | Complete business dekking |
| Multi-versie Ondersteuning | 8+ Syntess versies | Unieke concurrentiepositie |
| Relatie Complexiteit | 239 relaties in SSM | Geavanceerd dimensioneel ontwerp |
| ETL Complexiteit | 599 KB versie-bewuste scripts | Intelligente datatransformatie |
| Documentatie Diepte | 1.900+ pagina's + DDL schemas | Complete transparantie |
| Transformatielagen | 5 prepare + 3 endview fases | Progressieve verrijking |
| Repository Omvang | 301 MB, 2.845 bestanden | Substantiële codebase |

---

*Dit document dient als basis voor juridische vastlegging. Raadpleeg een jurist voor definitieve overeenkomsten.*

**Documenthistorie:**
- v1.0 (jan 2026): Initiële versie
- v2.0 (jan 2026): Aangevuld met exacte informatie uit Aandeelhoudersovereenkomst DPG d.d. 17-12-2025
- v3.0 (16 jan 2026): Geauditeerd met exacte cijfers uit syntess_analyse repository; ETL-scripts, SSM, measures en rapportages geïnventariseerd
