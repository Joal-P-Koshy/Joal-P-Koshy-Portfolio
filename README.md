# Joal P Koshy — Graphic Design Portfolio

A responsive React + Vite portfolio starter based on the supplied 2026 PDF. The cover and introduction are combined into one homepage. The PDF's section sequence is preserved, with real-client work highlighted and placed ahead of other portfolio categories in the project presentation.

## Run locally

1. Install Node.js (18+ recommended).
2. In this folder, run `npm install`.
3. Run `npm run dev` and open the local URL shown by Vite.
4. Run `npm run build` to create a production build in `dist/`.

## Update projects

Edit `src/data/portfolio.js`. The project sections are data-driven. To add recent client work, add an entry to the `client-projects` section and place the corresponding image in `public/portfolio-pages/` (or update the image path to your own exported asset).

## About the image previews

The `public/portfolio-pages/` images are page previews rendered from the supplied PDF so the initial version can show your actual portfolio content. For the polished final version, replace these full-page previews with individual high-resolution artwork exports and mockups, especially for recent real-client projects.

## Contact and social links

Check the contact information and Instagram handle in `src/data/portfolio.js` before publishing. A working Instagram URL was not included in the PDF, so the handle is currently displayed as text.
