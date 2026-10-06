# ShareMate Research Project Website

A static, responsive single-page website for **ShareMate: A Socially Connected Smart Mobility and Community Support App**. It uses HTML, CSS, and vanilla JavaScript and can be hosted directly with GitHub Pages.

## Preview

Run `python3 -m http.server 8000` in this directory and open `http://localhost:8000/`.

## Add verified research materials

No ShareMate documents, photos, dates, names, supervisor details, team email, or implementation notes were present in the supplied workspace. The site marks those details as pending. Do not replace them with guesses.

1. Copy verified documents without changing their contents into `public/documents/` and verified presentations into `public/presentations/`.
2. Edit the corresponding `file: null` entry in `src/main.js` to use its **relative** path, for example `public/documents/research-paper.pdf`. Keep each report matched to its student ID. If a PDF and original PowerPoint are available, set `file` to the PDF and `downloadFile` to the PowerPoint path.
3. Update academic content and dates in `index.html` and `src/main.js` from the approved research materials. Set the team email as the `mailto:` recipient in the contact handler once confirmed.
4. Replace the conceptual architecture illustration in the methodology section with the actual diagram if available.

Suggested filenames are `topic-assessment.pdf`, `research-paper.pdf`, `individual-report-IT22054340.pdf`, `individual-report-IT22088864.pdf`, `individual-report-IT22215956.pdf`, `individual-report-IT22298058.pdf`, and `final-report.pdf`. For presentations: `proposal-presentation.pdf`, `progress-presentation-1.pdf`, `progress-presentation-2.pdf`, and `final-presentation.pdf`.

Until a file path is supplied, its card displays **Coming Soon** and has no broken link. File paths are relative, so they work both at a domain root and at a GitHub Pages repository subpath. Use GitHub Pages **Deploy from a branch**, with this repository root as the publishing folder.
