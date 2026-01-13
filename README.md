# Notifica.nl Website

Migratie van www.notifica.nl naar een eigen codebase met Eleventy (11ty).

## Tech Stack

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/)
- **Templating**: Nunjucks
- **Styling**: CSS

## Development

### Vereisten

- Node.js 18+
- npm

### Installatie

```bash
npm install
```

### Development server

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Project Structuur

```
notifica_site/
├── src/
│   ├── _includes/    # Templates en layouts
│   ├── _data/        # Globale data bestanden
│   ├── assets/       # CSS, JS, images
│   └── pages/        # Content pagina's
├── .eleventy.js      # Eleventy configuratie
└── package.json
```

## TODO: WordPress Migratie

De volgende bestanden bevatten nog verwijzingen naar de WordPress-site (www.notifica.nl) die uitgefaseerd wordt:

- `src/admin/index.njk` - verwijzingen naar WordPress secties
- `src/robots.txt` - sitemap URL
- `src/_data/site.json` - site URL
- `src/webinars/optimalisatie-winstgevendheid-december-2025/index.njk` - afbeelding URLs

**Let op:** De SSH wizard (`ssh-verbinding-wizard.njk`) is onafhankelijk van WordPress.

## License

All rights reserved - Notifica
