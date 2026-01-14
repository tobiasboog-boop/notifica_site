# SEO Instructie Backlog - Complete Checklist voor Optimale Score

> **Doel:** 90%+ Seobility score
> **Gebaseerd op:** Notifica Site optimalisatie 70% → 76%
> **Voor:** Toekomstige site optimalisaties

---

## 📋 Snelle Diagnose Checklist

Gebruik deze checklist bij eerste SEO scan:

- [ ] **Meta tags binnen limiet?** (title ≤580px, description ≤1000px)
- [ ] **H1 content match?** (H1 keywords aanwezig in body text)
- [ ] **Heading ratio OK?** (max 20-25 headings per 1000 woorden)
- [ ] **Alt-texts aanwezig?** (alle images)
- [ ] **Mobile viewport?** (`width=device-width, initial-scale=1.0`)
- [ ] **Schema.org markup?** (minimaal Organization)
- [ ] **Open Graph tags?** (voor social sharing)
- [ ] **Canonical URL correct?** (wijst naar juiste domein)
- [ ] **SSL/HTTPS?** (all pages & resources)
- [ ] **Social sharing buttons?** (LinkedIn, Twitter, Facebook)

---

## 🎯 Prioriteit Matrix

### P0 - Critical (Eerst Fixen, Score Impact: 15-25%)

#### 1. Meta Tags Optimalisatie
**Waarom kritisch:** Te lange meta tags kunnen score met 10-20% verlagen

**Acties:**
```yaml
# Check lengtes:
- Title: max 580px (~55 karakters)
- Description: max 1000px (~155 karakters)

# Test met:
- Seobility (toont exacte pixels)
- Of: karakters tellen (minder nauwkeurig)
```

**Template:**
```yaml
---
title: [Brand] | [Hoofdkeyword] voor [Target Audience]
description: [Waardepropositie]. [USP 1]. [USP 2]. [Call-to-action].
---
```

**Voorbeelden:**
```yaml
# ✅ GOED (575px)
title: Notifica | Power BI Dashboards voor Syntess Installatiebedrijven

# ❌ TE LANG (719px)
title: Notifica | Power BI Dashboards voor Syntess & Installatiebedrijven | 60+ Klanten | Live binnen 1 dag

# ✅ GOED (896px)
description: Power BI dashboards met directe Syntess koppeling. Automatische integratie met je ERP. 60+ installatiebedrijven gaan je voor. Live binnen 1 dag.
```

---

#### 2. H1 Content Match
**Waarom kritisch:** Google verwacht H1 keywords in body content

**Acties:**
1. Lees H1 heading
2. Zoek elk belangrijk woord in body text
3. Als woord ontbreekt: voeg toe aan eerste paragraaf of subtitle

**Voorbeeld:**
```html
<!-- H1 -->
<h1>Power BI Dashboards - Sturen op feiten in plaats van onderbuikgevoel</h1>

<!-- Body moet alle H1 woorden bevatten: -->
<p>Sturen op feiten in plaats van onderbuikgevoel maakt het verschil...</p>
```

**Check:**
- Elk woord uit H1 moet minimaal 1x in body voorkomen
- Bij voorkeur in eerste 2 paragrafen
- Gebruik varianten (synoniemen OK, maar letterlijke match is beter)

---

#### 3. Heading Structuur Optimalisatie
**Waarom kritisch:** Verkeerde ratio = Page Structure score 70-93%

**Formule:**
```
Ideaal: max 20-25 headings per 1000 woorden
Notifica voorbeeld: 1155 woorden → max 23-29 headings

Start: 29 headings (93% score)
Na optimalisatie: 22 headings (100% score!)
```

**Acties:**
1. Tel aantal headings: `grep -o "<h[1-6]" index.html | wc -l`
2. Tel aantal woorden: ~1000-1200 is normaal
3. Bereken ratio: headings / (woorden / 1000)
4. Als ratio > 25: converteer niet-essentiële H3/H4 naar `<strong>`

**Welke headings behouden:**
- **H1**: Altijd 1x (hoofdtitel pagina)
- **H2**: Grote secties (Hero, Kenmerken, Testimonials, Contact)
- **H3**: Belangrijke subsecties (Pain points, belangrijkste features)

**Welke headings converteren naar `<strong>`:**
- Feature cards in grid layouts
- Steps in proces (1, 2, 3)
- USP bullets
- Testimonial namen
- FAQ items (als er al FAQPage schema is)

**Code voorbeeld:**
```html
<!-- ❌ VOOR: Te veel H3 headings -->
<div class="features-grid">
  <div class="feature">
    <h3>Feature 1</h3>
    <p>Beschrijving...</p>
  </div>
  <div class="feature">
    <h3>Feature 2</h3>
    <p>Beschrijving...</p>
  </div>
  <!-- 10+ features = 10+ extra headings -->
</div>

<!-- ✅ NA: Strong tags voor styling -->
<div class="features-grid">
  <div class="feature">
    <p><strong>Feature 1</strong> – Beschrijving...</p>
  </div>
  <div class="feature">
    <p><strong>Feature 2</strong> – Beschrijving...</p>
  </div>
</div>
```

---

#### 4. Mobile Optimization
**Waarom kritisch:** 60%+ traffic is mobile, Google mobile-first indexing

**Checklist:**
```html
<!-- ✅ Viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- ✅ Apple Touch Icon (iOS home screen) -->
<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/icon.png">

<!-- ✅ Responsive images -->
<img src="large.jpg"
     srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w"
     sizes="(max-width: 768px) 100vw, 50vw"
     alt="Beschrijving">
```

**Test:**
- Google Mobile-Friendly Test
- Seobility mobile score (moet 2/2 zijn)
- Test op echte devices (iOS + Android)

---

### P1 - High Priority (Score Impact: 10-15%)

#### 5. Alt-texts Optimalisatie
**Doel:** Elke image moet beschrijvende alt-text hebben

**Template:**
```
[Hoofdkeyword] [Context/Actie] [Specificatie/Details]
```

**Voorbeelden:**
```html
<!-- ❌ SLECHT -->
<img src="dashboard.png" alt="">
<img src="img1.jpg" alt="image">
<img src="screenshot.png" alt="screenshot">

<!-- ✅ GOED -->
<img src="dashboard.png" alt="Syntess Atrium Power BI Dashboard met real-time KPIs">
<img src="client-logo.jpg" alt="Nikkelen Elektrotechniek - Syntess Power BI klant">
<img src="integration.png" alt="Automatische Syntess ERP integratie met Power BI">
```

**Zoeken & vervangen:**
```bash
# Vind alle images zonder alt of lege alt:
grep -n '<img[^>]*alt=""' src/**/*.html
grep -n '<img(?![^>]*alt=)' src/**/*.html

# Of use Seobility: toont alle problematische images
```

---

#### 6. Internal Linking Strategie
**Doel:** Relevante links tussen paginas, unieke anchor texts

**Regels:**
1. **Geen duplicate anchor texts** - elke link unieke tekst
2. **Beschrijvend** - "klik hier" is slecht, "Syntess Atrium koppeling" is goed
3. **Relevant** - link alleen naar gerelateerde content
4. **Natuurlijk** - in lopende tekst, niet geforceerd

**Voorbeelden:**
```html
<!-- ❌ SLECHT: Duplicates -->
<a href="/syntess/">Syntess ERP</a>
<a href="/syntess/">Syntess ERP</a>

<!-- ✅ GOED: Unieke, beschrijvende anchors -->
<a href="/syntess/">Syntess Atrium ERP-systeem</a>
<a href="/syntess/">automatische Syntess koppeling</a>
<a href="/syntess/">Syntess Power BI integratie</a>
```

**Locaties voor internal links:**
- In body content (natuurlijk verweven)
- Related articles/diensten aan einde pagina
- Breadcrumb navigatie
- Footer (relevante product/dienst links)

**Vermijd:**
- Te veel links (max 100 per pagina)
- Links naar zelfde pagina
- "Lees meer" zonder context

---

#### 7. Schema.org Structured Data
**Doel:** Rich snippets in Google search results

**Must-Have Schemas:**

**Organization** (op homepage):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bedrijfsnaam",
  "description": "Korte beschrijving",
  "url": "https://www.domain.nl",
  "logo": "https://www.domain.nl/logo.svg",
  "sameAs": [
    "https://www.linkedin.com/company/bedrijf",
    "https://twitter.com/bedrijf"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+31-20-1234567",
    "email": "info@domain.nl",
    "availableLanguage": ["Dutch", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Straatnaam 123",
    "addressLocality": "Amsterdam",
    "postalCode": "1012 AB",
    "addressCountry": "NL"
  }
}
```

**FAQPage** (als je FAQ sectie hebt):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vraag 1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Antwoord op vraag 1..."
      }
    },
    {
      "@type": "Question",
      "name": "Vraag 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Antwoord op vraag 2..."
      }
    }
  ]
}
```

**SoftwareApplication** (voor SaaS/software product):
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Product Naam",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web-based",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "60"
  }
}
```

**Review/AggregateRating** (voor testimonials):
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product/Dienst Naam",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jan Jansen"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Uitstekende service..."
    }
  ]
}
```

**BreadcrumbList** (voor navigatie):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.domain.nl"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Producten",
      "item": "https://www.domain.nl/producten"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Product X"
    }
  ]
}
```

**Valideren:**
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

---

#### 8. Open Graph & Twitter Cards
**Doel:** Mooie previews bij delen op social media

**Complete implementatie:**
```html
<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Paginatitel - max 60 karakters">
<meta property="og:description" content="Beschrijving max 155 karakters">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.domain.nl/pagina">
<meta property="og:site_name" content="Bedrijfsnaam">
<meta property="og:locale" content="nl_NL">
<meta property="og:image" content="https://www.domain.nl/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Beschrijving van afbeelding">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@bedrijf">
<meta name="twitter:title" content="Paginatitel">
<meta name="twitter:description" content="Beschrijving">
<meta name="twitter:image" content="https://www.domain.nl/twitter-card.jpg">
<meta name="twitter:image:alt" content="Beschrijving van afbeelding">
```

**Image specificaties:**
- **Open Graph**: 1200x630px (ratio 1.91:1)
- **Twitter Card**: 1200x628px (ratio 1.91:1)
- Format: JPG of PNG
- Max bestandsgrootte: 5MB
- Zet belangrijkste content in center (mobile crop)

**Test tools:**
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/

---

#### 9. Social Sharing Buttons
**Doel:** Seobility social media score 0% → 100%

**Implementatie (proper anchor tags, geen JavaScript):**
```html
<div class="social-sharing">
  <span>Deel deze pagina:</span>

  <!-- LinkedIn -->
  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.domain.nl"
     target="_blank"
     rel="noopener noreferrer"
     class="share-button linkedin">
    <svg><!-- LinkedIn icon --></svg>
    Deel op LinkedIn
  </a>

  <!-- Twitter/X -->
  <a href="https://twitter.com/intent/tweet?url=https://www.domain.nl&text=Paginatitel"
     target="_blank"
     rel="noopener noreferrer"
     class="share-button twitter">
    <svg><!-- Twitter icon --></svg>
    Deel op Twitter
  </a>

  <!-- Facebook -->
  <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.domain.nl"
     target="_blank"
     rel="noopener noreferrer"
     class="share-button facebook">
    <svg><!-- Facebook icon --></svg>
    Deel op Facebook
  </a>
</div>
```

**Waarom `<a>` ipv JavaScript `onclick`?**
- SEO crawlers kunnen `<a>` tags volgen
- Toegankelijk zonder JavaScript enabled
- Better UX (preview in browser status bar)

**Styling tips:**
```css
.share-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: white;
  font-size: 14px;
}

.share-button.linkedin { background: #0077B5; }
.share-button.twitter { background: #1DA1F2; }
.share-button.facebook { background: #1877F2; }
```

---

### P2 - Medium Priority (Score Impact: 5-10%)

#### 10. Canonical URLs
**Doel:** Duplicate content voorkomen

**Implementatie:**
```html
<link rel="canonical" href="https://www.domain.nl/pagina">
```

**Regels:**
1. Canonical wijst naar "hoofdversie" van pagina
2. Als je www EN non-www hebt: kies één
3. HTTP vs HTTPS: kies HTTPS
4. Trailing slash: kies met OF zonder, wees consistent

**Voorbeelden:**
```html
<!-- Homepage -->
<link rel="canonical" href="https://www.domain.nl/">

<!-- Productpagina -->
<link rel="canonical" href="https://www.domain.nl/producten/product-x">

<!-- Paginated content (pagina 2 moet wijzen naar pagina 1) -->
<link rel="canonical" href="https://www.domain.nl/blog">
```

**Common mistakes:**
- Canonical wijst naar 404 pagina
- Canonical wijst naar redirect
- Canonical mist HTTPS
- Development site wijst canonical naar productie (OK)
- Productie site wijst canonical naar development (FOUT!)

---

#### 11. Content Kwaliteit
**Doel:** Relevante, unieke content met natuurlijke keyword density

**Checklist:**
- [ ] **Word count**: min 300 woorden, ideaal 800-1500
- [ ] **Keyword density**: 1-3% (niet te veel, niet te weinig)
- [ ] **Readability**: korte zinnen (gem 10-15 woorden)
- [ ] **Paragraphs**: max 4-5 zinnen per alinea
- [ ] **Lists**: gebruik bullets voor scannability
- [ ] **No duplicate content**: unieke tekst per pagina
- [ ] **No placeholder text**: "Lorem ipsum" verwijderen

**Content structuur:**
1. **Intro** (100-150 woorden): Wat is het probleem?
2. **Body** (500-1000 woorden): Hoe lost dit het op?
3. **CTA** (50-100 woorden): Wat is de volgende stap?

**Keyword plaatsing (natuurlijk!):**
- In title tag (1x)
- In H1 (1x)
- In eerste paragraaf (1x)
- In H2 headings (2-3x)
- In body content (3-5x, varianten gebruiken)
- In alt-texts images (1-2x)

---

#### 12. Page Speed Optimization
**Doel:** Loading time < 3 seconden

**Quick wins:**
```html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://cdn.example.com">

<!-- Preload critical resources -->
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/critical.css" as="style">

<!-- Async/defer JavaScript -->
<script src="/js/analytics.js" async></script>
<script src="/js/app.js" defer></script>

<!-- Lazy load images below fold -->
<img src="image.jpg" loading="lazy" alt="...">
```

**Optimization checklist:**
- [ ] Compress images (WebP format, max 200KB)
- [ ] Minify CSS/JS (remove whitespace, comments)
- [ ] Enable GZIP/Brotli compression
- [ ] Use CDN for static assets
- [ ] Remove unused CSS/JS
- [ ] Lazy load below-the-fold images
- [ ] Critical CSS inline, rest defer

**Test tools:**
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

---

#### 13. HTTPS & Security
**Doel:** SSL certificate, secure connections

**Checklist:**
- [ ] HTTPS enabled (SSL certificate)
- [ ] All resources loaded via HTTPS (no mixed content)
- [ ] Redirect HTTP → HTTPS (301)
- [ ] HSTS header enabled
- [ ] Security headers configured

**Security headers:**
```nginx
# .htaccess of server config
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "geolocation=(), microphone=()"
```

---

### P3 - Low Priority (Score Impact: 0-5%, Long-term)

#### 14. Sitemap.xml
**Doel:** Help crawlers alle paginas vinden

**Voorbeeld:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.domain.nl/</loc>
    <lastmod>2026-01-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.domain.nl/over-ons</loc>
    <lastmod>2026-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**Generators:**
- 11ty plugin: `@quasibit/eleventy-plugin-sitemap`
- Online tools: XML-sitemaps.com
- Manual: Simpel XML bestand

**Submit naar:**
- Google Search Console
- Bing Webmaster Tools

---

#### 15. Robots.txt
**Doel:** Crawler instructies geven

**Voorbeeld:**
```txt
User-agent: *
Allow: /

# Block admin/private pages
Disallow: /admin/
Disallow: /private/
Disallow: /tmp/

# Allow images
Allow: /assets/images/

# Sitemap location
Sitemap: https://www.domain.nl/sitemap.xml
```

**Test:** https://www.domain.nl/robots.txt moet toegankelijk zijn

---

#### 16. Backlinks Strategy (Long-term)
**Doel:** External factors score 3% → 50%+

**Tactieken:**
1. **Gastblogs** schrijven op relevante sites
2. **Partnerships** met complementaire bedrijven
3. **Directory listings** (Google My Business, Yelp, branche-specifiek)
4. **Social media** posts met links
5. **Press releases** bij nieuwe features/nieuws
6. **Resource pages** (tools, whitepapers) die anderen linken
7. **Broken link building** (vind broken links op andere sites, bied jouw content aan)

**Quality > Quantity:**
- 1 link van autoritaire site > 100 links van spam sites
- Relevante niche > algemene directory
- Dofollow > nofollow (maar mix is natuurlijk)

**Tools:**
- Ahrefs (backlink analysis)
- Moz Link Explorer
- Google Search Console (inbound links)

---

## 🔄 Workflow: Van 0 naar 90%

### Week 1: Foundation (P0 Critical)
**Dag 1-2:**
- [ ] Meta tags optimaliseren (title, description)
- [ ] H1 content match controleren
- [ ] Mobile viewport + Apple Touch Icon

**Dag 3-4:**
- [ ] Heading structuur fixen (conversie naar `<strong>`)
- [ ] Alt-texts toevoegen aan alle images

**Dag 5:**
- [ ] Eerste Seobility scan
- [ ] Quick wins prioriteren

### Week 2: Enhancement (P1 High)
**Dag 1-2:**
- [ ] Schema.org markup (Organization, FAQPage)
- [ ] Open Graph + Twitter Cards

**Dag 3-4:**
- [ ] Internal linking strategie
- [ ] Social sharing buttons

**Dag 5:**
- [ ] Tweede Seobility scan
- [ ] Score vergelijken met Week 1

### Week 3: Polish (P2 Medium)
**Dag 1-2:**
- [ ] Canonical URLs configureren
- [ ] Content kwaliteit review

**Dag 3-4:**
- [ ] Page speed optimization
- [ ] HTTPS & security headers

**Dag 5:**
- [ ] Derde Seobility scan
- [ ] Target 85%+ bereiken

### Week 4+: Long-term (P3 Low)
**Ongoing:**
- [ ] Backlinks strategie uitvoeren
- [ ] Content marketing (blogs, resources)
- [ ] Monitor rankings Google Search Console
- [ ] Maandelijkse Seobility scans

---

## 📊 Score Interpretatie

| Score | Status | Acties |
|-------|--------|--------|
| **90-100%** | 🌟 Excellent | Onderhouden, backlinks bouwen |
| **80-89%** | ✅ Very Good | Minor tweaks, focus op content |
| **70-79%** | ⚠️ Good | P1 items aanpakken |
| **60-69%** | ⚠️ Fair | P0 + P1 critical fixen |
| **0-59%** | ❌ Poor | Start met P0 foundation |

---

## 🛠️ Tools Referentie

### SEO Analysis
- **Seobility** (primary): https://www.seobility.net/
- Google Search Console: https://search.google.com/search-console
- Google PageSpeed Insights: https://pagespeed.web.dev/

### Schema Testing
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

### Social Media Testing
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/

### Performance
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/
- Pingdom Tools: https://tools.pingdom.com/

### Backlinks
- Ahrefs: https://ahrefs.com/
- Moz Link Explorer: https://moz.com/link-explorer
- Majestic: https://majestic.com/

---

## 📝 Quick Reference: Common Fixes

### Fix 1: Meta Tags Te Lang
```yaml
# Check length:
# - Title: max 580px (~55 chars)
# - Description: max 1000px (~155 chars)

# ❌ FOUT
title: Brand | Product for Target Audience | Feature 1 | Feature 2 | Feature 3 | CTA

# ✅ FIX
title: Brand | Product for Target Audience
```

### Fix 2: Te Veel Headings
```bash
# Count headings:
grep -o "<h[1-6]" index.html | wc -l

# If > 25 per 1000 words:
# Convert H3/H4 to <strong> in feature cards, steps, USPs
```

### Fix 3: Missing Alt-texts
```bash
# Find images without alt:
grep -n '<img[^>]*alt=""' src/**/*.html

# Add descriptive alt:
<img src="x.jpg" alt="[Keyword] [Context] [Details]">
```

### Fix 4: No Mobile Viewport
```html
<!-- Add to <head>: -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="apple-touch-icon" sizes="180x180" href="/icon.png">
```

### Fix 5: Missing Schema.org
```html
<!-- Add Organization schema to <head>: -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brand",
  "url": "https://www.domain.nl"
}
</script>
```

---

## 🎯 Success Criteria

**Minimal Viable SEO (75%+):**
- [x] Meta tags within limits
- [x] H1 content match
- [x] Heading ratio optimized
- [x] All images have alt-texts
- [x] Mobile viewport configured
- [x] Basic Schema.org (Organization)

**Target SEO (85%+):**
- [x] All Minimal Viable SEO
- [x] Open Graph + Twitter Cards
- [x] FAQPage schema
- [x] Social sharing buttons
- [x] Internal linking strategy
- [x] Canonical URLs configured

**Excellent SEO (90%+):**
- [x] All Target SEO
- [x] Page speed < 2 seconds
- [x] HTTPS + security headers
- [x] Sitemap.xml + robots.txt
- [x] 10+ quality backlinks
- [x] Regular content updates

---

## 📚 Resources

### Documentation
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Schema.org Documentation: https://schema.org/docs/documents.html
- Open Graph Protocol: https://ogp.me/

### Communities
- r/SEO (Reddit)
- Moz Community
- Search Engine Land

### Stay Updated
- Google Search Central Blog
- Moz Blog
- Ahrefs Blog

---

*Laatste update: 14 januari 2026*
*Gebaseerd op: Notifica Site 70% → 76% → target 80%+*
