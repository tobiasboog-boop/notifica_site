# Intellectueel Eigendom Notifica - Executive Summary

**Data Performance Group B.V.** | Januari 2026 | Voor: IP-advocaat

---

## 1. Kernboodschap

Notifica B.V. (dochter van Data Performance Group) bezit een **unieke "receptuur"** voor Business Intelligence in de installatiebranche. Deze receptuur combineert:

1. Een **eeuwigdurende GRIP-licentie** (ETL-platform, eigendom Dolf Jansonius)
2. **Zelfgebouwde transformatielogica** (599 KB aan scripts, 60.000 regels code)
3. Een **enterprise-grade datamodel** (148 tabellen, 1.031 DAX measures)
4. **15 kant-en-klare rapportages** voor de installatiebranche

**Totale omvang:** 301 MB broncode en documentatie, 2.845 bestanden

---

## 2. Juridische Structuur

```
AANDEELHOUDERS (elk 25%)
├── GMC Holding B.V. (Arthur Gartz)
├── Macjofi B.V. (Mark Haring)
├── Fornix Holding B.V. (Tobias Boog)
└── Jansonius Holding B.V. (Dolf Jansonius) → brengt GRIP-licentie in

        ↓

DATA PERFORMANCE GROUP B.V. (Holding) - KvK 85392405
├── Bezit: Eeuwigdurende GRIP-licentie
└── 100% eigenaar van dochtermaatschappijen

        ↓

NOTIFICA B.V. (Werkmaatschappij) - KvK 81772645
└── Ontwikkelt en exploiteert de "receptuur"
```

---

## 3. IP-componenten en Eigendom

| Component | Eigenaar | Bescherming | Geauditeerde Omvang |
|-----------|----------|-------------|---------------------|
| **GRIP Software** | Dolf Jansonius (persoonlijk) | Licentie aan DPG | Eeuwigdurend + gratis |
| **ETL-scripts Syntess** | DPG/Notifica | Auteursrecht | 9 scripts, 599 KB |
| **Data Warehouse Schema** | DPG/Notifica | Auteursrecht | 241 views, 534 KB SQL |
| **Semantic Model (SSM)** | DPG/Notifica | Auteursrecht | 148 tabellen, 257 TMDL-bestanden |
| **DAX Measures** | DPG/Notifica | Auteursrecht | 1.031+ formules |
| **Rapportage-templates** | DPG/Notifica | Auteursrecht | 15 productie-rapportages |
| **Methodologie** | DPG/Notifica | Bedrijfsgeheim | ~1.900 pag. documentatie |

---

## 4. Unieke Waardepropositie

### Waarom is dit meer dan "bij elkaar geklikte functionaliteit"?

1. **Multi-versie ondersteuning**: Dezelfde scripts werken met 8+ verschillende Syntess ERP versies. Dit vereist jarenlange kennis van de evolutie van het datamodel.

2. **Standaardisatie-principe**: Ongeacht bronversie levert het systeem **altijd dezelfde outputstructuur** op. Dit maakt schaalbaarheid mogelijk naar 60+ klanten.

3. **Branche-specifieke kennis**: De 1.031 DAX measures bevatten gecodificeerde domeinkennis over:
   - Projectcalculaties en margeberekeningen
   - Service- en onderhoudsplanning
   - Werkbon- en urenregistratie
   - Voorraad- en inkoopoptimalisatie

4. **Geïntegreerde architectuur**: De vijf lagen (ETL → DWH → Endviews → SSM → Reports) werken naadloos samen en zijn niet los bruikbaar.

---

## 5. Risicobescherming

### Huidige situatie (aandachtspunt):
IP zit verspreid: GRIP-licentie bij DPG, overige IP impliciet bij Notifica B.V.

### Gewenste situatie:
Alle IP expliciet bij DPG Groep (holding), met licentie naar Notifica.

### Bescherming bij faillissement Notifica:
- IP blijft eigendom van DPG Groep (curator kan geen beslag leggen)
- DPG kan doorondernemen of verkopen aan derde

### Bescherming bij vertrek Dolf Jansonius:
- Vast in aandeelhoudersovereenkomst Art. 12.4
- Licentievergoeding €4.000/maand indien van toepassing
- Broncode in escrow bij Enshore B.V.

---

## 6. Benodigde Juridische Acties

| Prioriteit | Actie | Doel |
|------------|-------|------|
| **Hoog** | Leveringsakte IP (Notifica → DPG) | Formele overdracht van alle zelfgebouwde IP |
| **Hoog** | Licentieovereenkomst (DPG → Notifica) | Gebruiksrecht vastleggen |
| **Middel** | Aanvulling aandeelhoudersovereenkomst | Expliciteren dat nieuwe IP automatisch bij DPG komt |

---

## 7. Complexiteitsindicatoren (waarde-onderbouwing)

| Metriek | Waarde | Betekenis |
|---------|--------|-----------|
| DAX Measures | 1.031+ | Enterprise-grade analytics |
| Endviews | 241 over 9 domeinen | Complete business dekking |
| Syntess versies | 8+ ondersteund | Unieke marktpositie |
| Relaties in datamodel | 239 | Geavanceerd dimensioneel ontwerp |
| ETL-scripts | 599 KB (~60.000 regels) | Substantiële transformatielogica |
| Totale repository | 301 MB, 2.845 bestanden | Omvangrijke, gedocumenteerde codebase |

---

## 8. Conclusie

De Notifica-receptuur vertegenwoordigt significante intellectuele waarde door de unieke combinatie van:
- Gecodificeerde branche-specifieke domeinkennis
- Technische complexiteit (1.031+ measures, 241 views, multi-versie support)
- Schaalbare architectuur (60+ klanten op dezelfde codebase)

**Aanbeveling:** Formaliseer de IP-overdracht naar DPG Groep om bescherming te bieden tegen operationele risico's in de werkmaatschappij.

---

*Document opgesteld door Data Performance Group t.b.v. IP-advocaat*
*Versie 1.0 - 16 januari 2026*
*Gebaseerd op repository audit syntess_analyse (301 MB, 2.845 bestanden)*
