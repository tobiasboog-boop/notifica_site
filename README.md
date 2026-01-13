# Syntess Knowledge Base

Deze repository bevat alle bronbestanden, scripts en documentatie voor het Syntess ecosysteem.

## 🎯 Doel van deze Knowledge Base

Deze knowledge base documenteert de complete technische architectuur van de Syntess data pipeline en rapportage oplossing. Het doel is om:

- **Collega's** in staat te stellen de Syntess propositie volledig te begrijpen en te communiceren naar klanten
- **AI-systemen** te voeden met accurate technische documentatie voor intelligente ondersteuning
- **Kennis** te behouden over de volledige data flow van bron tot eindrapport
- **Transparantie** te bieden in alle transformaties, schema's en rapportage lagen

## 🏗️ Architectuur Overview

Het Syntess ecosysteem bestaat uit meerdere lagen die data transformeren van bronsysteem naar eindgebruiker rapporten:

```
┌─────────────────────────────────────────────────────────────┐
│ Source: Syntess ERP (Firebird Database)                     │
│ ↓ DDL documentatie in Source_Database_Schema/               │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ ETL Layer: GRIP Scripts (5 Prepare + 3 Endview)            │
│ ↓ Scripts in ETL_Scripts/                                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Data Warehouse: Postgres (Schema "Prepare" + Endview schemas)│
│ ↓ DDL documentatie in DWH_Schema/                           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Semantic Layer: SSM (Syntess Semantic Model - De "Kubus")  │
│ ↓ TMDL definities in Standard_Semantic_Models/              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Presentation Layer: Power BI Reports (Thin & Custom)        │
│ ↓ Rapport definities in Reports/                            │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    Eindgebruikers (Klanten)
```

## 📊 Data Flow Uitleg

### 1. Source Database (Firebird)
De Syntess ERP database draait op Firebird en bevat alle operationele data. Tabellen en views uit deze database worden gedocumenteerd in `Source_Database_Schema/`.

### 2. ETL Proces (GRIP)
De ETL scripts extraheren, transformeren en laden data naar het Data Warehouse:

**Belangrijk**: Er is **geen ruwe data laag** (raw layer). We beginnen direct met transformaties in Prepare 1.

#### Prepare Scripts (1-5)
De prepare scripts zijn **sequentieel** en moeten in volgorde worden uitgevoerd:

- **Prepare 1**:
  - Extraheert data van Firebird naar Postgres schema "Prepare"
  - Voert direct transformaties, berekeningen en logica uit
  - Sommige tabellen zijn hier al definitief klaar

- **Prepare 2-5**:
  - Bouwen voort op tabellen uit eerdere prepare stappen
  - Creëren views in schema "Prepare" die tabellen genereren
  - Voeren aanvullende bewerkingen en berekeningen uit
  - Een tabel kan in meerdere stappen verder worden bewerkt
  - Tabellen uit eerdere stappen kunnen als hulptabellen dienen voor vervolgstappen

**Afhankelijkheden**: Prepare 1 → Prepare 2 → Prepare 3 → Prepare 4 → Prepare 5 (strict sequentieel)

**Versie-specifieke queries**:
De Prepare scripts bevatten Syntess versie-specifieke SQL queries. De ETL tooling GRIP:

1. **Versiedetectie**:
   - GRIP haalt vooraf de **hoofdversie** en **subversie** op van de Syntess installatie van de klant
   - Bijvoorbeeld: versie 8.5, 9.0, 9.2, etc.

2. **Query selectie**:
   - Met een zoekfunctie wordt gezocht naar de juiste SQL query voor die specifieke versie
   - Scripts bevatten meerdere query-varianten per Syntess versie

3. **Waarom versie-specifiek nodig is**:
   - Tabellen kunnen ontbreken in bepaalde Syntess versies
   - Kolommen kunnen nog niet bestaan in oudere versies
   - Database structuur kan verschillen tussen versies

4. **Risico en edge cases**:
   - ⚠️ **Fouten kunnen optreden** als een versie buiten het zoekresultaat valt
   - Dit gebeurt bij zeer nieuwe of zeer oude Syntess versies die nog niet in de scripts zijn opgenomen
   - Dit is een bekende foutgevoelige kant van het systeem die monitoring vereist

Dit maakt het mogelijk om met één set ETL scripts meerdere Syntess versies te ondersteunen, maar vereist wel onderhoud bij nieuwe Syntess releases.

**Standaardisatie principe**:
Een cruciaal architectuurprincipe is dat versie-specifieke SQL queries **altijd dezelfde output structuur** opleveren:

- **Dezelfde tabelnamen** bij alle klanten, ongeacht Syntess versie
- **Dezelfde kolomnamen** in het DWH, ongeacht Syntess versie
- **Gestandaardiseerde structuur** maakt het mogelijk om:
  - Het Data Warehouse schema gelijk te houden voor alle klanten
  - De Endviews te standaardiseren
  - Eén SSM te onderhouden voor alle klanten
  - Thin Reports zonder aanpassingen bij alle klanten te deployen

**Inhoudelijke verschillen**:
Wat **wel** kan verschillen tussen klanten/versies is de **inhoud** van de data:
- Kolommen kunnen leeg zijn (NULL) bij oudere Syntess versies
- Kolommen kunnen gevuld zijn bij nieuwere versies
- Maar de structuur (tabel- en kolomnamen) blijft altijd hetzelfde

Dit standaardisatieprincipe is essentieel voor schaalbaarheid en onderhoud van de oplossing.

**Klant-specifieke queries**:
Naast versie-specifieke queries bestaan er ook **klant-specifieke queries** voor situaties waar klanten verschillende werkwijzen hanteren:

1. **Klant lookup**:
   - Op basis van het **klantnummer** wordt bepaald welke query wordt gebruikt
   - Klanten worden toegewezen aan een specifieke query-variant (meestal A of B)

2. **Query varianten**:
   - In principe zijn er altijd **twee varianten**: versie A of versie B
   - Een klant gaat ofwel naar versie A ofwel naar versie B
   - Dit is afhankelijk van klant-specifieke bedrijfsprocessen of configuraties

3. **Standaardisatie behouden**:
   - ✅ Ondanks verschillende query logica is de **output identiek**:
     - Dezelfde tabelnaam
     - Dezelfde kolomnamen
     - Dezelfde structuur
   - Dit zorgt ervoor dat het DWH schema en SSM gestandaardiseerd blijven
   - Alle klanten kunnen dezelfde rapporten gebruiken

**Voorbeeld scenario**:
Klant A gebruikt een andere manier om voorraad te waarderen dan klant B, maar beide krijgen een tabel "Voorraadwaardering" met dezelfde kolommen (artikel_id, waarde, datum, etc.).

#### Endview Scripts (1-3)
De endview scripts creëren de finale views:

- Zijn **afhankelijk** van de voltooide prepare-tabellen
- Creëren **alleen views**, nooit tabellen
- Staan in verschillende Postgres schema's (niet in "Prepare")
- Dienen als directe input voor de SSM

**Afhankelijkheden**: Alle Prepare scripts (1-5) moeten compleet zijn voordat Endviews kunnen worden uitgevoerd

#### Maatwerk Scripts
Naast de standaard Prepare en Endview scripts bestaan er ook **maatwerk scripts** voor klant-specifieke requirements die niet in het standaardmodel passen:

**Maatwerk Endviews** (meest voorkomend):
- Specifieke views voor individuele klanten
- Worden aangemaakt wanneer klanten unieke rapportage behoeften hebben
- Over het algemeen wordt voor Prepare-niveau gekozen om functionaliteit voor **alle klanten** door te voeren
- Maatwerk blijft daarom meestal beperkt tot Endview niveau

**Maatwerk Prepare Scripts** (uitzonderlijk):
- In sommige gevallen worden **maatwerk Prepare tabellen** of **views** gebouwd
- Dit gebeurt vooral vanuit **performance overwegingen**
- Bijvoorbeeld: complexe berekeningen die anders te zwaar worden op Endview niveau

**Impact op standaardisatie**:
⚠️ **Maatwerk doorbreekt het standaardisatie principe**:
- Maatwerk Prepare tabellen/views passen **niet** in het gestandaardiseerde DWH schema
- Maatwerk Endviews passen **niet** in de standaard SSM
- Dit vereist:
  - Klant-specifieke DWH schema aanpassingen
  - Klant-specifieke SSM varianten of Custom Reports
  - Extra onderhoud en complexiteit

**Organisatie van maatwerk scripts**:
- Maatwerk wordt **niet** per klant in aparte bestanden opgeslagen
- Er is **één groot maatwerk script** met alle klant-specifieke logica
- Binnen dit script bevatten **routines het klantnummer** voor herkenning
- GRIP herkent het klantnummer en voert alleen de relevante routines uit voor die specifieke klant
- Dit maakt onderhoud centraal en overzichtelijk

**Filosofie**:
- Maatwerk wordt zoveel mogelijk **vermeden** om schaalbaarheid te behouden
- Bij nieuwe requirements wordt eerst gekeken of deze standaard kunnen worden doorgevoerd voor alle klanten
- Alleen als dit echt niet past, wordt maatwerk toegepast
- Maatwerk betekent afwijking van "one size fits all" en verhoogt onderhoudskosten

### 3. Data Warehouse (Postgres)
Het DWH bevat:
- Schema "Prepare" met alle tussentijdse tabellen en views
- Verschillende schema's met endviews per domein (verkoop, voorraad, service, etc.)

### 4. Semantic Model (SSM)
De SSM is een standalone Power BI semantic model dat fungeert als centrale "kubus":
- Verbindt met DWH endviews
- Bevat business logic, measures, en relaties
- Wordt gebruikt als databron voor meerdere thin reports
- Bestaat in varianten: SSM_Postgres (actief) en SSM_ADF_Legacy (deprecated)

### 5. Reports
Power BI rapporten die klanten gebruiken:
- **Thin Reports**: Lichte rapporten die SSM als databron gebruiken
- **Custom Reports**: Maatwerk rapporten met eigen semantic models

## Mappenstructuur

### 📁 Source_Database_Schema
Bevat DDL (Data Definition Language) statements van de Syntess database.

#### Tables/
DDL statements voor alle tabellen in de Syntess database.

#### Views/
DDL view definities uit de Syntess database.

### 📁 DWH_Schema
Bevat de schema definities van het Data Warehouse (Postgres) - het resultaat van de ETL processen.

#### Tables/
DDL statements van alle tabellen in het Postgres schema **"Prepare"**:
- Prepare 1: Tabellen aangemaakt vanuit Firebird
- Prepare 2-5: Tabellen gegenereerd op basis van views (Postgres → Postgres transformaties)

#### Views/
DDL view definities in het Postgres schema **"Prepare"**, aangemaakt door Prepare 2 t/m 5. Deze views worden gebruikt om de tabellen te genereren.

#### Endviews/
DDL van de finale endviews die in **verschillende Postgres schema's** staan. Dit zijn de eindresultaten die als input dienen voor de Semantic Models.

### 📁 ETL_Scripts
Bevat alle GRIP ETL scripts voor het Data Warehouse.

#### Prepare_Scripts/
Vijf prepare scripts die de eerste laag met tabellen opbouwen in het DWH.

#### Endview_Scripts/
Drie endview scripts op basis van de prepare tabellen.

#### Custom_Scripts/
Maatwerk ETL scripts voor klant-specifieke requirements:
- **Niet per klant gescheiden**: Alle maatwerk in één of meerdere centrale scripts
- **Klantnummer herkenning**: Routines bevatten klantnummers om te bepalen welke logica moet worden uitgevoerd
- **GRIP selectie**: GRIP detecteert het klantnummer en voert alleen relevante routines uit
- Bevat voornamelijk maatwerk endviews, soms maatwerk prepare scripts
- Doorbreekt het standaardisatie principe (zie Data Flow Uitleg sectie)

### 📁 Standard_Semantic_Models
Bevat TMDL definities van het centrale Syntess Semantic Model (SSM) - de "kubus" tussen de databron en eindgebruiker rapporten.

De SSM is een standalone Power BI bestand dat als centrale databron dient voor meerdere rapporten. Er zijn verschillende varianten per databron:

#### SSM_Postgres/
Actieve SSM variant die Postgres als databron gebruikt.

#### SSM_ADF_Legacy/
Legacy SSM variant voor Azure Data Factory (wordt niet meer bijgehouden).

### 📁 ERP_Documentation
ERP help documentatie in markdown formaat.

### 📁 Reports
Power BI **eindproducten voor klanten** met hun voorkant (visualisaties) en rapport-specifieke semantic models in TMDL formaat.

Reports zijn de eindgebruiker rapporten die klanten gebruiken, in tegenstelling tot de SSM die fungeert als centrale "kubus" databron.

#### Thin_Reports/
Rapporten die direct verbonden zijn met de centrale SSM als databron. Deze rapporten bevatten voornamelijk visualisaties en beperkte eigen DAX logic, waarbij de SSM de primaire databron is.

Elk thin report heeft:
- TMDL definitie van het rapport-specifieke semantic model (verbonden met SSM)
- DAX measures (aanvullend op SSM)
- Documentatie/analyse rapporten

**Beschikbare thin reports:**
- `Voorraad_Analyse/` - Voorraadrapportage op basis van SSM
  - `Service uitvoering Servicedesk.SemanticModel/` - TMDL definitie
  - `DAX_Measures_Voorraad.dax` - DAX measures
  - `RAPPORT_Voorraad_Analyse_Syntess.md` - Analyse en documentatie

#### Custom_Reports/
Maatwerk rapporten met uitgebreide eigen semantic models. Deze rapporten kunnen geheel losstaan van de SSM of significante eigen datalogica bevatten.

Elk custom report heeft:
- TMDL definitie van het volledige semantic model
- DAX measures
- Documentatie/analyse rapporten
- Eventuele specifieke configuraties

**Relatie met Custom Scripts**:
Custom Reports hebben vaak een directe relatie met maatwerk ETL scripts:
- **Custom ETL Scripts** (`ETL_Scripts/Custom_Scripts/`) creëren maatwerk endviews of prepare tabellen
- **Custom Reports** gebruiken deze maatwerk views/tabellen in hun semantic model
- De relatie is niet altijd één-op-één (één custom script kan meerdere reports voeden, of vice versa)
- Het is nog onduidelijk of er een vaste patroon ontstaat (beperkte ervaring met custom reports tot nu toe)
- Documentatie van deze relatie is belangrijk voor onderhoud en begrip van afhankelijkheden

## Voorraad Analyse Specifieke Informatie

### Kritische bevindingen

#### 1. INACTIEVE relatie UitgifteVoorraadpositieKey
De relatie tussen `Voorraad mutaties[UitgifteVoorraadpositieKey]` en `Voorraad posities[VoorraadpositieKey]` is **INACTIEF**.

Alle uitgifte measures MOETEN `USERELATIONSHIP()` gebruiken:
```dax
Voorraad Uitgifte Aantal =
CALCULATE(
    SUM('Voorraad mutaties'[Aantal]),
    USERELATIONSHIP(
        'Voorraad mutaties'[UitgifteVoorraadpositieKey],
        'Voorraad posities'[VoorraadpositieKey]
    )
)
```

#### 2. Geen Kalender relatie voor Mutaties
Er is **GEEN** actieve relatie tussen `Voorraad mutaties[Boekdatum]` en `Kalender[Datum]`.

Dit moet toegevoegd worden voor time intelligence functies (PREVIOUSMONTH, YTD, etc.).

## Online documentatie

De volledige interactieve documentatie staat op:
https://tobiasboog-boop.github.io/notifica_site/admin/analyses/voorraad-syntess/

## Contact

Voor vragen over deze knowledge base, neem contact op met het Notifica team.
