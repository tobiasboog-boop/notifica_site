# Custom Reports

Deze map bevat maatwerk Power BI rapporten met eigen semantic models die niet op de standaard SSM zijn gebaseerd.

## 📋 Overzicht Custom Reports

Custom Reports worden aangemaakt wanneer:
- Klanten unieke rapportage behoeften hebben die niet in de standaard SSM passen
- Maatwerk endviews of prepare tabellen nodig zijn voor specifieke analyses
- Performance overwegingen een aangepaste data structuur vereisen

## 🔗 Relatie met Custom ETL Scripts

Elk custom report heeft meestal een relatie met maatwerk ETL scripts in `ETL_Scripts/Custom_Scripts/`.

**Documentatie per report:**
Voeg voor elk custom report een submap toe met daarin:
- TMDL definitie van het semantic model
- DAX measures
- Analyse/documentatie markdown
- **README.md** met:
  - Klantnummer(s) die dit report gebruiken
  - Gerelateerde custom script routines
  - Welke maatwerk DWH objects worden gebruikt
  - Business case: waarom was maatwerk nodig?
  - Eventuele beperkingen of special considerations

## 📊 Custom Reports Inventory

| Report Naam | Klant(en) | Custom Script Routine | DWH Objects | Status |
|-------------|-----------|----------------------|-------------|--------|
| *Nog geen custom reports gedocumenteerd* | - | - | - | - |

> **Notitie**: Vul deze tabel aan wanneer nieuwe custom reports worden toegevoegd.

## ⚠️ Onderhoud Overwegingen

- Custom reports verhogen de onderhoudskosten
- Wijzigingen in custom scripts kunnen custom reports breken
- Test altijd de impact op custom reports bij ETL script updates
- Documenteer afhankelijkheden expliciet voor knowledge transfer

## 🚀 Nieuwe Custom Report Toevoegen

Bij het toevoegen van een nieuw custom report:

1. **Maak submap aan**: `Custom_Reports/[Report_Naam]/`
2. **Voeg bestanden toe**:
   - TMDL definitie
   - DAX measures
   - Documentatie
3. **Maak README.md** met minimaal:
   - Klantnummer(s)
   - Custom script dependencies
   - Business rationale
4. **Update inventory tabel** in deze README
5. **Documenteer in custom script** welke routines voor dit report zijn

## 📝 Template voor Custom Report README

```markdown
# [Report Naam]

## Klantinformatie
- **Klantnummer(s)**: [bijv. 12345, 67890]
- **Klantnaam**: [Optioneel]

## Custom Script Dependencies
- **Custom Script Routines**: [Lijst van routine namen/IDs]
- **Script locatie**: `ETL_Scripts/Custom_Scripts/[bestandsnaam]`

## DWH Objects
### Maatwerk Endviews
- `[schema].[view_naam]` - [Beschrijving]

### Maatwerk Prepare Tabellen (indien van toepassing)
- `prepare.[tabel_naam]` - [Beschrijving]

## Business Case
[Waarom was dit maatwerk nodig? Wat kan de standaard SSM niet?]

## Technische Details
- **Gebaseerd op**: [SSM variant, of volledig custom]
- **Performance overwegingen**: [Indien van toepassing]
- **Refresh frequentie**: [Dagelijks, wekelijks, etc.]

## Beperkingen
[Eventuele bekende beperkingen of special considerations]

## Wijzigingshistorie
| Datum | Versie | Wijziging | Door |
|-------|--------|-----------|------|
| YYYY-MM-DD | 1.0 | Initiële versie | [Naam] |
```
