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

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

All rights reserved - Notifica
