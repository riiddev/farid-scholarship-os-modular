# FARID // Scholarship Tracker 2026–2027

A single-page scholarship tracker for 2026 graduates, focused on Electrical Engineering and Science study paths. The embedded tracker dataset covers 24 opportunities: 10 domestic scholarships and 14 overseas scholarships.

## Features

- Neocities-style wireframe interface and an alternate dark Bento workspace.
- Scholarship status tracking and checklist state saved in the current browser with `localStorage`.
- Built-in code viewer for the project structure, frontend snippets, and Google Apps Script example.
- Google Sheets connection panel for checking a published CSV endpoint or a custom Apps Script URL.

## Stack

- HTML, CSS, and vanilla JavaScript in `index.html`.
- Tailwind CSS loaded from its CDN.
- Vite for local development and production builds.
- Google Sheets / Google Apps Script integration examples.

The current page is a standalone HTML/JavaScript frontend. React dependencies remain declared in `package.json`, but the current `index.html` does not mount a React application.

## Run locally

Install Node.js, then run:

```bash
npm install
npm run dev
```

Open the local address printed by Vite.

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Google Sheets

The spreadsheet ID used by the tracker is declared in `index.html` and `src/services/sheetsApi.js`.

To make the published CSV endpoint reachable, open the spreadsheet and use **File → Share → Publish to web**. The interface can also accept a custom Apps Script Web App URL.

The example in `google-apps-script/Code.gs` exposes a `doGet()` endpoint that returns the spreadsheet tabs as JSON. It is a read endpoint; write-back operations are not implemented in this file.

**Data note:** scholarship status and checklist selections are currently stored in the browser's local storage. They do not automatically sync between different browsers or devices. The connection panel currently checks endpoint reachability; it does not replace the embedded scholarship dataset with fetched records.

## Project structure

```text
.
├── google-apps-script/
│   └── Code.gs
├── src/
│   ├── services/
│   │   └── sheetsApi.js
│   └── styles/
│       └── neocities.css
├── index.html
└── package.json
```
