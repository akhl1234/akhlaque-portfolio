# Akhlaque Ansari — Personal Portfolio

Personal developer portfolio built with React, Vite, Tailwind CSS, and Lucide React using the Obsidian Violet dark theme.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The static production bundle is generated in `dist/`.

## Adding Your Resume PDF

Place your actual resume PDF file at:

```text
public/resume.pdf
```

Once present, the Resume download buttons across the header, hero, and footer will download it directly as `Akhlaque_Ansari_Resume.pdf`.

## Free Static Hosting Deployment

This project compiles to pure static assets (`dist/`) and requires no backend server or paid services:

- **GitHub Pages**: Push this repository to GitHub, run `npm run build`, and publish the `dist/` directory (or deploy via GitHub Actions using `actions/upload-pages-artifact` on `dist`).
- **Vercel / Netlify / Cloudflare Pages**: Connect your GitHub repository with build command `npm run build` and output directory `dist`.
