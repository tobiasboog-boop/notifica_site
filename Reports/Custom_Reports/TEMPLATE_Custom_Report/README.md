# [Report Naam] - TEMPLATE

> **Dit is een template**. Kopieer deze map en pas aan voor nieuwe custom reports.

## Klantinformatie
- **Klantnummer(s)**: [bijv. 12345, 67890]
- **Klantnaam**: [Optioneel, maar handig voor context]
- **Contactpersoon**: [Optioneel]

## Custom Script Dependencies
- **Custom Script Routines**:
  - `[routine_naam_1]` - [Beschrijving wat deze routine doet]
  - `[routine_naam_2]` - [Beschrijving]
- **Script locatie**: `ETL_Scripts/Custom_Scripts/[bestandsnaam].sql`
- **Klantnummer herkenning**: `IF klantnummer = '[nummer]' THEN ...`

## DWH Objects

### Maatwerk Endviews
| Schema | View Naam | Beschrijving | Gebruikt in Report |
|--------|-----------|--------------|-------------------|
| [schema] | [view_naam] | [Wat deze view doet] | [Ja/Nee] |

### Maatwerk Prepare Tabellen (indien van toepassing)
| Schema | Tabel Naam | Beschrijving | Performance Reden |
|--------|------------|--------------|-------------------|
| prepare | [tabel_naam] | [Wat deze tabel bevat] | [Waarom als tabel en niet view] |

## Business Case

### Probleemstelling
[Beschrijf het probleem of de behoefte van de klant]

### Waarom niet standaard?
[Leg uit waarom de standaard SSM + Thin Report dit niet kon oplossen]

### Gekozen Oplossing
[Beschrijf de gekozen maatwerk oplossing]

## Technische Details

### Architectuur
- **Gebaseerd op**: [SSM variant, of volledig custom semantic model]
- **Data Connectie**: [Direct Query / Import]
- **Refresh frequentie**: [Bijv. Dagelijks om 06:00]

### Performance Overwegingen
[Indien van toepassing: waarom zijn maatwerk prepare tabellen gebruikt, indexen, etc.]

### DAX Measures
- **Locatie**: `[Report_Naam]_DAX_Measures.dax`
- **Aantal measures**: [X]
- **Belangrijkste measures**: [Lijst]

## Semantic Model

### Tabellen
| Tabel | Bron | Type | Relaties |
|-------|------|------|----------|
| [Naam] | [DWH view/tabel] | [Fact/Dimension] | [Gerelateerd aan...] |

### Key Relationships
[Beschrijf de belangrijkste relaties in het model]

### Berekende Kolommen
[Indien van toepassing]

## Deployment

### Vereisten
- Custom ETL scripts moeten eerst zijn uitgevoerd
- DWH objects moeten bestaan
- [Andere vereisten]

### Installatie Stappen
1. [Stap 1]
2. [Stap 2]
3. [Stap 3]

## Testing

### Test Scenarios
1. [Test scenario 1]
2. [Test scenario 2]

### Validatie
[Hoe valideer je dat het report correct werkt?]

## Beperkingen

- [Bekende beperking 1]
- [Bekende beperking 2]
- [Special considerations]

## Troubleshooting

### Veelvoorkomende Problemen

**Probleem**: [Beschrijving]
**Oplossing**: [Wat te doen]

**Probleem**: [Beschrijving]
**Oplossing**: [Wat te doen]

## Wijzigingshistorie

| Datum | Versie | Wijziging | Door | Impact |
|-------|--------|-----------|------|--------|
| YYYY-MM-DD | 1.0 | Initiële versie | [Naam] | - |
| YYYY-MM-DD | 1.1 | [Wijziging beschrijving] | [Naam] | [Low/Medium/High] |

## Contact & Ownership

- **Ontwikkelaar**: [Naam]
- **Product Owner**: [Naam]
- **Laatste Review**: [Datum]

## Gerelateerde Documentatie

- Custom Script: `ETL_Scripts/Custom_Scripts/[bestandsnaam]`
- DWH Schema: `DWH_Schema/[relevant schema]`
- [Andere relevante docs]
