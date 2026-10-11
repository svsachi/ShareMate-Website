# ShareMate Research Project Website

A static, responsive single-page website for **ShareMate: A Socially Connected Smart Mobility and Community Support App**. It uses HTML, CSS, and vanilla JavaScript and can be hosted directly with GitHub Pages.

## Preview

Run the following command in this directory:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Research materials and downloads

Research PDFs are stored in `public/documents/`. The three PowerPoint decks are linked from the `presentation-decks-2026` GitHub release because they are large files. The final presentation is shown as coming soon until its file is added.

To update the materials:

1. Replace a document PDF in `public/documents/`, or upload a revised PowerPoint to the GitHub release and update its URL in `src/main.js`. Keep each individual report matched to its student ID. Add the final presentation file and its URL in `src/main.js` when available.
2. Update the download note in `index.html` when the final presentation is added.
3. Update academic content and dates in `index.html` and `src/main.js` from approved research materials. Set the team email as the `mailto:` recipient in the contact handler once confirmed.
4. Replace the conceptual architecture illustration in the methodology section with the approved system architecture diagram when available.

Team email, dates, and implementation notes remain pending where they have not been verified. Use GitHub Pages **Deploy from a branch**, with this repository root as the publishing folder.
