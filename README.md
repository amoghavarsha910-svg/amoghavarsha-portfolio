# Amoghavarsha K A — Portfolio

Personal portfolio website built with React and TypeScript.

## Overview

An editorial portfolio presenting Amoghavarsha K A, a Computer Science & Engineering student at Alva's Institute of Engineering and Technology. It features selected project work, education, capabilities, personal photography, and direct contact links.

## Features

- Responsive layout for desktop and mobile
- Selected project presentations and technology tags
- About, capabilities, education, learning focus, and personal photo sections
- Email, GitHub, and resume links
- SEO metadata, Open Graph tags, and a custom favicon
- Reduced-motion support

## Tech stack

- React 19
- TypeScript
- Vite
- CSS
- Lucide React icons

## Project structure

```text
public/
  favicon.svg
  images/                 Personal photographs
src/
  App.tsx                 Page sections and layout
  data/portfolio.ts       Central portfolio content
  index.css               Responsive design system
  main.tsx                Application entry point
```

## Local setup

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deployment

Deploy the `dist/` directory to any static hosting provider that supports single-page Vite builds. Add `Amoghavarsha_K_A_Resume.pdf` to `public/` to enable the resume download link.
