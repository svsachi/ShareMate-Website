# ShareMate Research Project Website

A static, responsive single-page website for **ShareMate: A Socially Connected Smart Mobility and Community Support App**. It uses HTML, CSS, and vanilla JavaScript and can be hosted directly with GitHub Pages.

## Preview

Run the following command in this directory:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Research materials and downloads

The eleven supplied PDFs are stored in `public/documents/` and `public/presentations/`. Each document and presentation card links to its corresponding file using a relative path, so visitors can view or download it at the domain root or under a GitHub Pages repository subpath.

**Source-file limitation:** All eleven PDFs supplied under different filenames are byte-for-byte identical. The content is a 14-page Topic Assessment Form, even in files named as reports or presentations. The website discloses this beside the download cards. Replace each file with its distinct approved original when available.

To update the materials:

1. Replace the corresponding PDF in `public/documents/` or `public/presentations/` without changing its filename, or update its relative path in `src/main.js` if the filename changes. Keep each individual report matched to its student ID. If a PDF and original PowerPoint are available, set `file` to the PDF and `downloadFile` to the PowerPoint path.
2. Update the disclosure in `index.html` once the PDFs are distinct and verified.
3. Update academic content and dates in `index.html` and `src/main.js` from approved research materials. Set the team email as the `mailto:` recipient in the contact handler once confirmed.
4. Replace the conceptual architecture illustration in the methodology section with the approved system architecture diagram when available.

Names, supervisor details, team email, dates, and implementation notes remain pending where they have not been verified. Use GitHub Pages **Deploy from a branch**, with this repository root as the publishing folder.
