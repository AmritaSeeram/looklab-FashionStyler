# LookLab AI

A polished React + Vite app that creates budget-aware outfit suggestions with real Amazon product recommendations.

Live demo: https://looklab-ai.netlify.app

## What it does

- Collects your style preferences, gender, occasion, and budget
- Generates a curated outfit with top, bottom, shoes, and accessories
- Selects real Amazon products and shows shopping links
- Prioritizes top + bottom to ensure the outfit stays within budget
- Displays an elegant, shopping-friendly outfit summary

## Built with

- React 18
- Vite
- JavaScript
- Netlify for deployment

## Project structure

- `src/App.jsx` — application shell and layout
- `src/components/StyleQuiz.jsx` — input form and outfit generation
- `src/components/OutfitCard.jsx` — rendered outfit summary and product cards
- `src/components/SavedLooks.jsx` — saved outfit previews
- `src/data.js` — Amazon product metadata and selection logic
- `src/styles.css` — app styling and visual polish

## Run locally

```bash
cd looklab-ai
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Build for production

```bash
cd looklab-ai
npm run build
```

## Deploy to Netlify

This project is already deployed to Netlify at the URL above. To redeploy manually:

```bash
cd looklab-ai
netlify deploy --dir=dist --prod
```

## Notes

- The app uses curated Amazon product metadata for reliability
- The selection algorithm ensures the generated outfit does not exceed the chosen budget
- If you want a custom domain, connect it through Netlify settings
