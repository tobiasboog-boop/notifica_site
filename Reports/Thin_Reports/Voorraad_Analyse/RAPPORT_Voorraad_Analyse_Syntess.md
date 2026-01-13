# Uitgebreid Analyserapport: Voorraadmodule Syntess

**Datum:** Januari 2026
**Versie:** 1.0
**Doel:** Analyse van het bestaande datamodel voor voorraadbeheer in Syntess en aanbevelingen voor Power BI rapportage

---

## Inhoudsopgave

1. [Management Samenvatting](#1-management-samenvatting)
2. [Tabelanalyse](#2-tabelanalyse)
   - 2.1 Voorraad magazijnen
   - 2.2 Voorraad locaties
   - 2.3 Voorraad posities
   - 2.4 Voorraad mutaties
3. [Gekoppelde Tabellen](#3-gekoppelde-tabellen)
4. [Datamodel Relaties](#4-datamodel-relaties)
5. [ETL Flow (GRIP)](#5-etl-flow-grip)
6. [DAX Measures](#6-dax-measures)
7. [Rapportpagina's en Visualisaties](#7-rapportpaginas-en-visualisaties)
8. [Implementatie Roadmap](#8-implementatie-roadmap)

---

## 1. Management Samenvatting

### Huidige Situatie
Het Syntess Semantisch Model bevat reeds **4 voorraad-gerelateerde tabellen** die via DirectQuery verbonden zijn met het SSM (Syntess Semantisch Model). De tabellen zijn:
- Voorraad magazijnen
- Voorraad locaties
- Voorraad posities
- Voorraad mutaties

### Bevindingen
1. **Datastructuur is aanwezig** - Alle benodigde tabellen voor voorraadrapportage bestaan
2. **Relaties zijn gedefinieerd** - Het stermodel is correct opgezet met actieve en inactieve relaties
3. **Measures ontbreken** - Er is slechts 1 financiele voorraad measure (balanswaarde)
4. **Geen operationele KPI's** - Voorraadstand, omloopsnelheid, en min/max bewaking ontbreken

### Aanbeveling
Implementeer een voorraadrapport met de voorgestelde DAX measures en visualisaties zoals beschreven in dit rapport.

---

## 2. Tabelanalyse

### 2.1 Voorraad magazijnen

**Doel:** Stamgegevens van magazijnen per administratie

**Brontabel (Syntess):** `AT_MAGAZIJN`

| Kolom | Datatype | Beschrijving | Gebruik |
|-------|----------|--------------|---------|
| `MagazijnKey` | INT64 (PK) | Unieke identifier magazijn | Relatiesleutel |
| `AdministratieKey` | INT64 (FK) | Koppeling naar administratie | Filter per bedrijf |
| `Magazijn` | STRING | Code + omschrijving magazijn | Weergave in rapport |
| `Projectmagazijn` | STRING | Ja/Nee - Is dit een projectmagazijn | Segmentatie |
| `MagazijnGeblokkeerd` | STRING | Ja/Nee - Geblokkeerd voor mutaties | Filter actieve magazijnen |
| `Status` | STRING | Actueel/Historisch | Filter actieve records |

**Analyse:**
- Onderscheid tussen **standaard magazijnen** en **projectmagazijnen** is belangrijk
- Projectmagazijnen bevatten OHW (Onderhanden Werk) voorraad gekoppeld aan specifieke projecten
- Filter altijd op `Status = 'Actueel'` voor operationele rapportage

**ETL (GRIP prepare fase 1):**
```sql
SELECT
    GC_ID MagazijnKey,
    ADMINIS_GC_ID AdministratieKey,
    GC_CODE||' - '||GC_OMSCHRIJVING Magazijn,
    CASE PROJECTMAGAZIJN_JN WHEN 'J' THEN 'Ja' WHEN 'N' THEN 'Nee' END AS Projectmagazijn,
    CASE GEBLOKKEERD_JN WHEN 'J' THEN 'Ja' WHEN 'N' THEN 'Nee' END AS MagazijnGeblokkeerd,
    CASE GC_HISTORISCH_JN WHEN 'J' THEN 'Historisch' WHEN 'N' THEN 'Actueel' END AS Magazijnstatus
FROM AT_MAGAZIJN
```

---

### 2.2 Voorraad locaties

**Doel:** Fysieke locaties binnen magazijnen (stellingen, vakken, etc.)

**Brontabel (Syntess):** `AT_VRDLOCAT`

| Kolom | Datatype | Beschrijving | Gebruik |
|-------|----------|--------------|---------|
| `VoorraadlocatieKey` | INT64 (PK) | Unieke identifier locatie | Relatiesleutel |
| `ParentVoorraadlocatieKey` | INT64 (FK) | Bovenliggende locatie | **Hierarchie** ondersteuning |
| `MagazijnKey` | INT64 (FK) | Koppeling naar magazijn | Relatie |
| `AdministratieKey` | INT64 (FK) | Koppeling naar administratie | Filter |
| `ProjectKey` | INT64 (FK) | Koppeling naar project | Voor projectmagazijnen |
| `Voorraadlocatie` | STRING | Omschrijving locatie | Weergave |
| `Voorraadlocatie code` | STRING | Code van de locatie | Identificatie |
| `Retourlocatie` | STRING | Ja/Nee - Is dit een retourlocatie | Segmentatie retouren |
| `Geblokkeerd` | STRING | Ja/Nee | Filter |
| `Status` | STRING | Ja/Nee (Historisch) | Filter |

**Analyse:**
- **Hierarchische structuur** via `ParentVoorraadlocatieKey` - geschikt voor drill-down
- **Retourlocaties** apart identificeerbaar - belangrijk voor retouranalyse
- Koppeling naar `ProjectKey` alleen relevant voor projectmagazijnen

**Let op:** De relatie `Voorraad locaties[ProjectKey] → Projecten[ProjectKey]` is **INACTIEF**. Gebruik `USERELATIONSHIP()` indien nodig.

---

### 2.3 Voorraad posities

**Doel:** Artikel-posities met voorraadniveaus per locatie

**Brontabel (Syntess):** `AT_VOORRAAD`

| Kolom | Datatype | Beschrijving | Gebruik |
|-------|----------|--------------|---------|
| `VoorraadpositieKey` | INT64 (PK) | Unieke identifier positie | Relatiesleutel |
| `voorraadlocatieKey` | INT64 (FK) | Koppeling naar locatie | Relatie |
| `MagazijnKey` | INT64 (FK) | Koppeling naar magazijn | Shortcut relatie |
| `TariefKey` | INT64 (FK) | Koppeling naar artikel/tarief | **Artikelinformatie** |
| `Geblokkeerd` | STRING | Ja/Nee | Filter |
| `MaximumVoorraad` | DOUBLE | Maximum voorraadniveau | **Min/Max bewaking** |
| `MinimumVoorraad` | DOUBLE | Minimum voorraadniveau (bestelgrens) | **Min/Max bewaking** |
| `Status` | STRING | Actueel/Historisch | Filter |

**Analyse:**
- **Kritieke tabel** - koppelt artikelen aan locaties
- `TariefKey` verbindt naar de **Tarieven** tabel met alle artikeldetails
- `MinimumVoorraad` en `MaximumVoorraad` zijn essentieel voor voorraadsignalering
- Geen fysieke voorraadstand in deze tabel - moet berekend worden uit mutaties

**Belangrijke relatie:**
```
Voorraad posities[TariefKey] → Tarieven[TariefKey]
```
Via Tarieven krijg je toegang tot:
- Handelsartikel (naam, bestelnummer)
- Artikel merk, type, serie
- Artikelklasse
- Verrekenprijs, Bruto Verkoopprijs
- EAN codes

---

### 2.4 Voorraad mutaties

**Doel:** Alle voorraadtransacties (ontvangst en uitgifte)

**Brontabel (Syntess):** Afgeleid uit `FactKosten` (gefilterd op voorraadpositie)

| Kolom | Datatype | Beschrijving | Gebruik |
|-------|----------|--------------|---------|
| `AdministratieKey` | INT64 (FK) | Administratie | Filter |
| `OntvangstVoorraadpositieKey` | INT64 (FK) | Positie bij ontvangst | **IN-mutaties** |
| `UitgifteVoorraadpositieKey` | INT64 (FK) | Positie bij uitgifte | **UIT-mutaties** |
| `DocumentKey` | INT64 (FK) | Brondocument | Traceerbaarheid |
| `KostensoortKey` | INT64 (FK) | Kostensoort | Categorisatie |
| `KostenplaatsKey` | INT64 (FK) | Kostenplaats | Kostenallocatie |
| `TariefKey` | INT64 (FK) | Artikel | Artikelinfo |
| `Aantal` | DOUBLE | Aantal eenheden | **Kernwaarde** |
| `Verrekenprijs` | DOUBLE | Interne verrekeningsprijs | Waardering |
| `Kostprijs` | DOUBLE | Werkelijke kostprijs | Waardering |
| `Kostenbron` | STRING | Pakbon/Inkoop/etc. | Segmentatie |
| `Kostenstatus` | STRING | Status van de kosten | Filter |
| `Boekdatum` | DATETIME | Datum van mutatie | **Tijdanalyse** |
| `Dagboek code` | STRING | Dagboekcode | Identificatie |
| `Dagboek` | STRING | Dagboeknaam | Weergave |
| `Bestelnummer` | STRING | Inkoopbestelnummer | Traceerbaarheid |
| `LeverancierRelatieKey` | INT64 (FK) | Leverancier | Inkoopanalyse |
| `CrediteurRelatieKey` | INT64 (FK) | Crediteur | Financiele analyse |

**Analyse:**
- **Dubbele voorraadpositie-kolommen**:
  - `OntvangstVoorraadpositieKey` = voorraad IN (ontvangst van leverancier, transfer IN)
  - `UitgifteVoorraadpositieKey` = voorraad UIT (uitgifte naar project, verkoop, transfer UIT)
- De relatie naar `UitgifteVoorraadpositieKey` is **INACTIEF** in het model
- `Aantal` is altijd positief - richting wordt bepaald door welke key gevuld is
- Via `Boekdatum` koppeling naar Kalender voor tijdanalyse

**KRITIEK - Inactieve relatie:**
```
'Voorraad mutaties'[UitgifteVoorraadpositieKey] → 'Voorraad posities'[VoorraadpositieKey]
Status: INACTIEF
```
Dit betekent dat voor uitgifte-analyse `USERELATIONSHIP()` nodig is in DAX.

---

## 3. Gekoppelde Tabellen

### 3.1 Tarieven (Artikelstamgegevens)

De **Tarieven** tabel fungeert als artikelstamtabel en bevat uitgebreide productinformatie:

| Kolom | Beschrijving |
|-------|--------------|
| `TariefKey` | Primaire sleutel |
| `Tarief Code` | Artikelcode |
| `Tarief omschrijving` | Artikelnaam |
| `Tarief` | Code + naam gecombineerd |
| `Categorie` | Artikelcategorie |
| `Verrekenprijs` | Interne prijs |
| `Bruto Verkoopprijs` | Verkoopprijs |
| `Consumentenprijs` | Adviesprijs |
| `Handelsartikel` | Naam handelsartikel |
| `Handelsartikel bestelnummer` | Bestelnummer bij leverancier |
| `Artikel merk` | Merknaam |
| `Artikel type` | Type-aanduiding |
| `Artikel serie` | Serie-aanduiding |
| `Artikelklasse` | Classificatie |
| `Artikel EAN code` | EAN barcode |
| `Recept Ja/Nee` | Samengesteld artikel |
| `Status` | Actueel/Historisch |

### 3.2 Kostensoorten

Classificatie van kosten voor rapportage:

| Kolom | Beschrijving |
|-------|--------------|
| `Kostensoort Code` | Code |
| `Kostensoort` | Omschrijving |
| `Categorie` | A=Arbeid, M=Materiaal, E=Materieel, O=Overig |
| `Type kostensoort` | Nadere classificatie |

**Filter voor voorraad:** `Categorie = 'M'` (Materiaal)

### 3.3 Administraties

| Kolom | Beschrijving |
|-------|--------------|
| `AdministratieKey` | Primaire sleutel |
| `Code` | Administratiecode |
| `Administratie` | Naam |
| `Status` | Actueel/Historisch |

### 3.4 Kalender

De Kalender tabel is essentieel voor tijdanalyse. Koppeling via:
- `Voorraad mutaties[Boekdatum] → Kalender[Datum]`

---

## 4. Datamodel Relaties

### 4.1 Visueel Relatieschema

```
                    ┌─────────────────┐
                    │ Administraties  │
                    │ (AdministratieKey)│
                    └────────┬────────┘
                             │ 1:N
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
    ┌─────────────────┐  ┌─────────┐  ┌─────────────────┐
    │Voorraad magazijnen│ │Kalender │  │   Tarieven      │
    │  (MagazijnKey)    │ │ (Datum) │  │  (TariefKey)    │
    └────────┬──────────┘ └────┬────┘  └────────┬────────┘
             │ 1:N             │                │ 1:N
             ▼                 │                │
    ┌─────────────────┐        │                │
    │Voorraad locaties │        │                │
    │(VoorraadlocatieKey)│      │                │
    └────────┬──────────┘       │                │
             │ 1:N              │                │
             ▼                  │                │
    ┌─────────────────┐         │                │
    │Voorraad posities │◄───────┼────────────────┘
    │(VoorraadpositieKey)│      │
    └────────┬──────────┘       │
             │ 1:N              │
             │ (2 relaties)     │
             ▼                  │
    ┌─────────────────┐         │
    │Voorraad mutaties │◄───────┘
    │ OntvangstKey (actief) │
    │ UitgifteKey (INACTIEF)│
    └───────────────────────┘
```

### 4.2 Relatiedefinities uit het Model

```
// Administraties → Magazijnen
relationship: Voorraad magazijnen[AdministratieKey] → Administraties[AdministratieKey]

// Magazijnen → Locaties
relationship: Voorraad locaties[MagazijnKey] → Voorraad magazijnen[MagazijnKey]

// Locaties → Posities
relationship: Voorraad posities[voorraadlocatieKey] → Voorraad locaties[VoorraadlocatieKey]

// Posities → Tarieven (artikelinfo)
relationship: Voorraad posities[TariefKey] → Tarieven[TariefKey]

// Mutaties → Posities (ONTVANGST - ACTIEF)
relationship: Voorraad mutaties[OntvangstVoorraadpositieKey] → Voorraad posities[VoorraadpositieKey]

// Mutaties → Posities (UITGIFTE - INACTIEF!)
relationship: Voorraad mutaties[UitgifteVoorraadpositieKey] → Voorraad posities[VoorraadpositieKey]
isActive: FALSE
```

---

## 5. ETL Flow (GRIP)

### 5.1 Prepare Fase 1 - Dimensietabellen

**DimVoorraadlocaties:**
```sql
SELECT
    GC_ID VoorraadlocatieKey,
    VRDLOCAT_GC_ID ParentVoorraadlocatieKey,
    MAGAZIJN_GC_ID MagazijnKey,
    ADMINIS_GC_ID AdministratieKey,
    WERK_GC_ID ProjectKey,
    GC_OMSCHRIJVING AS Voorraadlocatie,
    GC_CODE AS Voorraadlocatie_code,
    CASE RETOURLOCATIE_JN WHEN 'J' THEN 'Ja' WHEN 'N' THEN 'Nee' END AS Retourlocatie,
    CASE GEBLOKKEERD_JN WHEN 'J' THEN 'Ja' WHEN 'N' THEN 'Nee' END AS Geblokkeerd,
    CASE GC_HISTORISCH_JN WHEN 'J' THEN 'Ja' WHEN 'N' THEN 'Nee' END AS VoorraadlocatieStatus
FROM AT_VRDLOCAT
```

**DimVoorraadposities:**
```sql
SELECT
    GC_ID VoorraadpositieKey,
    VRDLOCAT_GC_ID voorraadlocatieKey,
    MAGAZIJN_GC_ID MagazijnKey,
    TARIEF_GC_ID TariefKey,
    CASE GEBLOKKEERD_JN WHEN 'J' THEN 'Ja' WHEN 'N' THEN 'Nee' END AS Geblokkeerd,
    MAXIMUM_VOORRAAD AS MaximumVoorraad,
    MINIMUM_VOORRAAD AS MinimumVoorraad,
    CASE HISTORISCH_JN WHEN 'N' THEN 'Actueel' ELSE 'Historisch' END AS Status
FROM AT_VOORRAAD
```

### 5.2 Endviews Fase 1 & 2 - Views voor Semantisch Model

**View: voorraad.Posities**
```sql
CREATE OR REPLACE VIEW voorraad."Posities" AS
SELECT
    VoorraadpositieKey,
    voorraadlocatieKey,
    MagazijnKey,
    TariefKey,
    Geblokkeerd,
    MaximumVoorraad,
    MinimumVoorraad,
    Status
FROM DimVoorraadposities
```

**View: voorraad.Mutaties** (uit FactKosten gefilterd)
```sql
CREATE OR REPLACE VIEW voorraad."Mutaties" AS
SELECT
    AdministratieKey,
    OntvangstVoorraadpositieKey,
    UitgifteVoorraadpositieKey,
    DocumentKey,
    KostensoortKey,
    KostenplaatsKey,
    TariefKey,
    Aantal,
    Verrekenprijs,
    Kostprijs,
    Kostenbron,
    Kostenstatus,
    Boekdatum,
    -- ... overige kolommen
FROM financieel."Kosten"
WHERE COALESCE(OntvangstVoorraadpositieKey, UitgifteVoorraadpositieKey) IS NOT NULL
```

---

## 6. DAX Measures

### 6.1 Basis Voorraad Measures

```dax
// ============================================
// FOLDER: Voorraad\Basis
// ============================================

// Ontvangsten (IN-mutaties)
Voorraad Ontvangst Aantal =
SUM('Voorraad mutaties'[Aantal])

Voorraad Ontvangst Waarde Kostprijs =
SUM('Voorraad mutaties'[Kostprijs])

Voorraad Ontvangst Waarde Verrekenprijs =
SUM('Voorraad mutaties'[Verrekenprijs])


// Uitgiftes (UIT-mutaties) - LET OP: USERELATIONSHIP nodig!
Voorraad Uitgifte Aantal =
CALCULATE(
    SUM('Voorraad mutaties'[Aantal]),
    USERELATIONSHIP(
        'Voorraad mutaties'[UitgifteVoorraadpositieKey],
        'Voorraad posities'[VoorraadpositieKey]
    )
)

Voorraad Uitgifte Waarde Kostprijs =
CALCULATE(
    SUM('Voorraad mutaties'[Kostprijs]),
    USERELATIONSHIP(
        'Voorraad mutaties'[UitgifteVoorraadpositieKey],
        'Voorraad posities'[VoorraadpositieKey]
    )
)

Voorraad Uitgifte Waarde Verrekenprijs =
CALCULATE(
    SUM('Voorraad mutaties'[Verrekenprijs]),
    USERELATIONSHIP(
        'Voorraad mutaties'[UitgifteVoorraadpositieKey],
        'Voorraad posities'[VoorraadpositieKey]
    )
)
```

### 6.2 Voorraadstand Berekening

```dax
// ============================================
// FOLDER: Voorraad\Stand
// ============================================

// Actuele voorraadstand (ontvangst - uitgifte)
Voorraad Stand Aantal =
VAR Ontvangsten = [Voorraad Ontvangst Aantal]
VAR Uitgiftes = [Voorraad Uitgifte Aantal]
RETURN
    Ontvangsten - Uitgiftes

// Voorraadwaarde op kostprijs
Voorraad Stand Waarde Kostprijs =
VAR Ontvangsten = [Voorraad Ontvangst Waarde Kostprijs]
VAR Uitgiftes = [Voorraad Uitgifte Waarde Kostprijs]
RETURN
    Ontvangsten - Uitgiftes

// Voorraadwaarde op verrekenprijs
Voorraad Stand Waarde Verrekenprijs =
VAR Ontvangsten = [Voorraad Ontvangst Waarde Verrekenprijs]
VAR Uitgiftes = [Voorraad Uitgifte Waarde Verrekenprijs]
RETURN
    Ontvangsten - Uitgiftes


// Gemiddelde kostprijs per eenheid
Voorraad Gemiddelde Kostprijs =
DIVIDE(
    [Voorraad Stand Waarde Kostprijs],
    [Voorraad Stand Aantal],
    0
)
```

### 6.3 Min/Max Bewaking

```dax
// ============================================
// FOLDER: Voorraad\Min-Max Bewaking
// ============================================

// Aantal posities onder minimum
Voorraad Onder Minimum Aantal =
CALCULATE(
    COUNTROWS('Voorraad posities'),
    FILTER(
        'Voorraad posities',
        [Voorraad Stand Aantal] < 'Voorraad posities'[MinimumVoorraad]
        && 'Voorraad posities'[MinimumVoorraad] > 0
    )
)

// Aantal posities boven maximum
Voorraad Boven Maximum Aantal =
CALCULATE(
    COUNTROWS('Voorraad posities'),
    FILTER(
        'Voorraad posities',
        [Voorraad Stand Aantal] > 'Voorraad posities'[MaximumVoorraad]
        && 'Voorraad posities'[MaximumVoorraad] > 0
    )
)

// Tekort t.o.v. minimum
Voorraad Tekort Aantal =
VAR MinVoorraad = SELECTEDVALUE('Voorraad posities'[MinimumVoorraad], 0)
VAR HuidigeStand = [Voorraad Stand Aantal]
RETURN
    IF(
        HuidigeStand < MinVoorraad && MinVoorraad > 0,
        MinVoorraad - HuidigeStand,
        0
    )

// Overschot t.o.v. maximum
Voorraad Overschot Aantal =
VAR MaxVoorraad = SELECTEDVALUE('Voorraad posities'[MaximumVoorraad], 0)
VAR HuidigeStand = [Voorraad Stand Aantal]
RETURN
    IF(
        HuidigeStand > MaxVoorraad && MaxVoorraad > 0,
        HuidigeStand - MaxVoorraad,
        0
    )

// Voorraadstatus indicator (voor KPI)
Voorraad Status =
VAR HuidigeStand = [Voorraad Stand Aantal]
VAR MinVoorraad = SELECTEDVALUE('Voorraad posities'[MinimumVoorraad], 0)
VAR MaxVoorraad = SELECTEDVALUE('Voorraad posities'[MaximumVoorraad], 0)
RETURN
    SWITCH(
        TRUE(),
        HuidigeStand <= 0, "Geen voorraad",
        MinVoorraad > 0 && HuidigeStand < MinVoorraad, "Onder minimum",
        MaxVoorraad > 0 && HuidigeStand > MaxVoorraad, "Boven maximum",
        "OK"
    )
```

### 6.4 Omloopsnelheid en Analyse

```dax
// ============================================
// FOLDER: Voorraad\Analyse
// ============================================

// Omloopsnelheid (per jaar)
Voorraad Omloopsnelheid =
VAR UitgifteJaar =
    CALCULATE(
        [Voorraad Uitgifte Waarde Kostprijs],
        DATESINPERIOD(Kalender[Datum], MAX(Kalender[Datum]), -1, YEAR)
    )
VAR GemiddeldeVoorraad =
    AVERAGEX(
        DATESINPERIOD(Kalender[Datum], MAX(Kalender[Datum]), -1, YEAR),
        [Voorraad Stand Waarde Kostprijs]
    )
RETURN
    DIVIDE(UitgifteJaar, GemiddeldeVoorraad, 0)

// Dagen voorraad (DSI - Days Sales of Inventory)
Voorraad Dagen =
DIVIDE(
    365,
    [Voorraad Omloopsnelheid],
    0
)

// Aantal unieke artikelen op voorraad
Voorraad Artikelen Aantal =
CALCULATE(
    DISTINCTCOUNT('Voorraad posities'[TariefKey]),
    [Voorraad Stand Aantal] > 0
)

// Aantal mutaties
Voorraad Mutaties Aantal =
COUNTROWS('Voorraad mutaties')
```

### 6.5 Tijdintelligentie

```dax
// ============================================
// FOLDER: Voorraad\Tijdvergelijking
// ============================================

// Voorraadstand vorige maand
Voorraad Stand VM =
CALCULATE(
    [Voorraad Stand Aantal],
    PREVIOUSMONTH(Kalender[Datum])
)

// Voorraadstand vorig jaar
Voorraad Stand VJ =
CALCULATE(
    [Voorraad Stand Aantal],
    SAMEPERIODLASTYEAR(Kalender[Datum])
)

// Mutatie t.o.v. vorige maand
Voorraad Mutatie MoM =
[Voorraad Stand Aantal] - [Voorraad Stand VM]

// Mutatie t.o.v. vorig jaar
Voorraad Mutatie YoY =
[Voorraad Stand Aantal] - [Voorraad Stand VJ]

// YTD Ontvangsten
Voorraad Ontvangst YTD =
CALCULATE(
    [Voorraad Ontvangst Aantal],
    DATESYTD(Kalender[Datum])
)

// YTD Uitgiftes
Voorraad Uitgifte YTD =
CALCULATE(
    [Voorraad Uitgifte Aantal],
    DATESYTD(Kalender[Datum])
)
```

### 6.6 Magazijn-specifieke Measures

```dax
// ============================================
// FOLDER: Voorraad\Magazijn
// ============================================

// Voorraad alleen in standaard magazijnen (geen projectmagazijnen)
Voorraad Stand Standaard Magazijnen =
CALCULATE(
    [Voorraad Stand Aantal],
    'Voorraad magazijnen'[Projectmagazijn] = "Nee"
)

// Voorraad in projectmagazijnen (OHW)
Voorraad Stand Projectmagazijnen =
CALCULATE(
    [Voorraad Stand Aantal],
    'Voorraad magazijnen'[Projectmagazijn] = "Ja"
)

// Aantal actieve magazijnen
Magazijnen Actief Aantal =
CALCULATE(
    COUNTROWS('Voorraad magazijnen'),
    'Voorraad magazijnen'[Status] = "Actueel",
    'Voorraad magazijnen'[MagazijnGeblokkeerd] = "Nee"
)
```

---

## 7. Rapportpagina's en Visualisaties

### 7.1 Pagina 1: Voorraad Dashboard (Overzicht)

**Doel:** Management overzicht van de voorraadsituatie

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Slicer: Administratie]  [Slicer: Magazijn]  [Slicer: Periode] │
├─────────────────────────────────────────────────────────────────┤
│ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────────────┐ │
│ │   KPI     │ │   KPI     │ │   KPI     │ │      KPI          │ │
│ │  Totale   │ │  Aantal   │ │  Onder    │ │   Omloop-         │ │
│ │ Voorraad- │ │ Artikelen │ │ Minimum   │ │   snelheid        │ │
│ │  waarde   │ │           │ │           │ │                   │ │
│ └───────────┘ └───────────┘ └───────────┘ └───────────────────┘ │
├─────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────┐ ┌─────────────────────────────┐ │
│ │                             │ │                             │ │
│ │    Lijndiagram              │ │    Staafdiagram             │ │
│ │    Voorraadwaarde           │ │    Top 10 Artikelen         │ │
│ │    over tijd                │ │    op waarde                │ │
│ │                             │ │                             │ │
│ └─────────────────────────────┘ └─────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────┐ ┌─────────────────────────────┐ │
│ │    Donut                    │ │    Matrix                   │ │
│ │    Verdeling per            │ │    Voorraad per             │ │
│ │    Artikelklasse            │ │    Magazijn                 │ │
│ └─────────────────────────────┘ └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Visualisaties:**

| Visual | Type | Velden | Measure |
|--------|------|--------|---------|
| KPI Voorraadwaarde | Card | - | `Voorraad Stand Waarde Kostprijs` |
| KPI Artikelen | Card | - | `Voorraad Artikelen Aantal` |
| KPI Onder Minimum | Card (conditional) | - | `Voorraad Onder Minimum Aantal` |
| KPI Omloopsnelheid | Gauge | - | `Voorraad Omloopsnelheid` |
| Trend Voorraad | Line Chart | X: `Kalender[Maand]` | `Voorraad Stand Waarde Kostprijs` |
| Top Artikelen | Bar Chart | Y: `Tarieven[Tarief]` | `Voorraad Stand Waarde Kostprijs` |
| Per Artikelklasse | Donut | Legend: `Tarieven[Artikelklasse]` | `Voorraad Stand Waarde Kostprijs` |
| Per Magazijn | Matrix | Rows: `Voorraad magazijnen[Magazijn]` | `Voorraad Stand Aantal`, `Voorraad Stand Waarde Kostprijs` |

---

### 7.2 Pagina 2: Min/Max Bewaking

**Doel:** Operationele controle op voorraadniveaus

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Slicer: Status]  [Slicer: Artikelklasse]  [Slicer: Magazijn]  │
├─────────────────────────────────────────────────────────────────┤
│ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────────────┐ │
│ │   KPI     │ │   KPI     │ │   KPI     │ │      KPI          │ │
│ │  Totaal   │ │  Onder    │ │  Boven    │ │   Geen            │ │
│ │ Posities  │ │ Minimum   │ │ Maximum   │ │   Voorraad        │ │
│ │    OK     │ │   (!)     │ │   (!)     │ │                   │ │
│ └───────────┘ └───────────┘ └───────────┘ └───────────────────┘ │
├─────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────────────────────────────────────────┐│
│ │                                                               ││
│ │   Tabel: Artikelen onder minimum                              ││
│ │   Kolommen: Artikel | Magazijn | Stand | Min | Tekort |       ││
│ │             Leverancier | Laatste mutatie                     ││
│ │                                                               ││
│ └───────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────────────────────────────────────────┐│
│ │                                                               ││
│ │   Tabel: Artikelen boven maximum                              ││
│ │   Kolommen: Artikel | Magazijn | Stand | Max | Overschot      ││
│ │                                                               ││
│ └───────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

**Tabel: Onder Minimum**

| Kolom | Bron |
|-------|------|
| Artikelcode | `Tarieven[Tarief Code]` |
| Artikel | `Tarieven[Tarief]` |
| Magazijn | `Voorraad magazijnen[Magazijn]` |
| Huidige stand | `[Voorraad Stand Aantal]` |
| Minimum | `Voorraad posities[MinimumVoorraad]` |
| Tekort | `[Voorraad Tekort Aantal]` |
| Leverancier | `Tarieven[Handelsartikel leverancier]` |
| Bestelnummer | `Tarieven[Handelsartikel bestelnummer]` |

**Conditional Formatting:**
- Tekort > 0: Rood achtergrond
- KPI Onder Minimum: Rood als > 0

---

### 7.3 Pagina 3: Mutatie Analyse

**Doel:** Analyse van voorraadmutaties over tijd

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Slicer: Periode]  [Slicer: Mutatierichting]  [Slicer: Bron]   │
├─────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │   Gecombineerd staaf/lijn diagram                           │ │
│ │   Staven: Ontvangst (groen) + Uitgifte (rood)               │ │
│ │   Lijn: Netto mutatie                                       │ │
│ │   X-as: Maand/Week                                          │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────┐ ┌───────────────────────────────┐ │
│ │   Donut                   │ │   Staafdiagram                │ │
│ │   Per Kostenbron          │ │   Top leveranciers            │ │
│ │   (Pakbon/Inkoop)         │ │   (ontvangst)                 │ │
│ └───────────────────────────┘ └───────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────────────────────────────────────────┐│
│ │   Detailtabel Mutaties                                        ││
│ │   Datum | Document | Artikel | In/Uit | Aantal | Waarde       ││
│ └───────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

### 7.4 Pagina 4: Artikelanalyse

**Doel:** Deep-dive per artikel

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Slicer: Artikelklasse]  [Slicer: Merk]  [Zoekbalk: Artikel]   │
├─────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────────────────────────────────────────┐│
│ │   Matrix met drill-down                                       ││
│ │   Rijen: Artikelklasse > Merk > Type > Artikel                ││
│ │   Kolommen: Stand | Waarde | Min | Max | Status | Omloop      ││
│ └───────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────┐ ┌─────────────────────────────┐ │
│ │   Sparkline per artikel     │ │   ABC-analyse               │ │
│ │   (voorraadverloop)         │ │   (Pareto)                  │ │
│ └─────────────────────────────┘ └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

### 7.5 Pagina 5: Magazijn Detail

**Doel:** Detailanalyse per magazijn en locatie

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Slicer: Administratie]  [Slicer: Magazijn type]               │
├─────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────┐ ┌─────────────────────────────┐ │
│ │   Treemap                   │ │   Kaart magazijnen          │ │
│ │   Magazijn > Locatie        │ │   met voorraadwaarde        │ │
│ │   Size: Voorraadwaarde      │ │                             │ │
│ └─────────────────────────────┘ └─────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────────────────────────────────────────┐│
│ │   Tabel Locatiedetail                                         ││
│ │   Hierarchie: Magazijn > Locatie > Positie                    ││
│ │   Kolommen: Artikel | Stand | Min | Max | Retourlocatie J/N   ││
│ └───────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

### 7.6 Pagina 6: Projectmagazijnen (OHW)

**Doel:** Overzicht voorraad in projectmagazijnen

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Slicer: Project]  [Slicer: Projectstatus]                     │
├─────────────────────────────────────────────────────────────────┤
│ ┌───────────┐ ┌───────────┐ ┌───────────────────────────────────┐│
│ │   KPI     │ │   KPI     │ │   Lijndiagram                    ││
│ │  Totale   │ │  Aantal   │ │   OHW voorraad trend             ││
│ │ OHW waarde│ │ Projecten │ │                                  ││
│ └───────────┘ └───────────┘ └───────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────────────────────────────────────────┐│
│ │   Tabel: Voorraad per project                                 ││
│ │   Project | Projectstatus | Voorraadwaarde | Laatste mutatie  ││
│ └───────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. Implementatie Roadmap

### Fase 1: Basis Measures
- [ ] Implementeer alle basis measures (ontvangst/uitgifte)
- [ ] Implementeer voorraadstand measures
- [ ] Test met bestaande data

### Fase 2: Dashboard Pagina
- [ ] Bouw Pagina 1: Voorraad Dashboard
- [ ] Configureer slicers en filters
- [ ] Test filtering en cross-filtering

### Fase 3: Min/Max Bewaking
- [ ] Implementeer min/max measures
- [ ] Bouw Pagina 2: Min/Max Bewaking
- [ ] Configureer conditional formatting en alerts

### Fase 4: Analyse Pagina's
- [ ] Bouw Pagina 3: Mutatie Analyse
- [ ] Bouw Pagina 4: Artikelanalyse
- [ ] Implementeer drill-down functionaliteit

### Fase 5: Detailpagina's
- [ ] Bouw Pagina 5: Magazijn Detail
- [ ] Bouw Pagina 6: Projectmagazijnen
- [ ] Implementeer hierarchische navigatie

### Fase 6: Optimalisatie
- [ ] Performance tuning (aggregaties indien nodig)
- [ ] Row Level Security configuratie
- [ ] Documentatie en training

---

## Bijlagen

### A. Bronbestanden Analyse

| Bestand | Locatie | Inhoud |
|---------|---------|--------|
| SemanticModel.zip | Desktop | Power BI TMDL model definities |
| syntess_prepare_*.grp | OneDrive | GRIP ETL prepare queries |
| syntess_endviews_*.grp | OneDrive | GRIP ETL view definities |
| SSM.zip | Downloads | SSM rapport structuur |

### B. Syntess Brontabellen

| GRIP Tabel | Syntess Bron |
|------------|--------------|
| DimMagazijnen | AT_MAGAZIJN |
| DimVoorraadlocaties | AT_VRDLOCAT |
| DimVoorraadposities | AT_VOORRAAD |
| FactKosten (gefilterd) | AT_INKOSTEN + AT_MAGUITG |

---

*Rapport gegenereerd op basis van analyse van Syntess Semantisch Model*
*Analysebestanden bewaard in: C:\Users\tobia\Downloads\syntess_analysis\*
