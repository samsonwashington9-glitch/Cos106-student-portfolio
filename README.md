# COS 106 Student Portfolio and Academic Management Website

A five-page responsive website built with HTML5, CSS3 and vanilla JavaScript for the MIVA Open University COS 106 term project.

## Pages
- `index.html` — Home page
- `about.html` — Biography, education, aspirations, skills and interests
- `projects.html` — Three sample projects plus HTML video and audio elements
- `planner.html` — Interactive academic task planner
- `contact.html` — Contact form with JavaScript validation

## Features
- Shared responsive navigation on all pages
- External CSS stylesheet using Flexbox and CSS Grid
- Mobile navigation menu and CSS transitions
- Semantic HTML, hyperlinks, lists, images/illustrations, table-ready semantic structure, form controls and multimedia
- Academic planner supports adding, completing, filtering and deleting tasks
- Planner saves tasks in browser `localStorage`
- Contact form checks required fields, email format and digits-only phone number

## Run locally
Open `index.html` in a modern browser. For best results, use a local development server such as the Live Preview feature in an online coding environment. No build step or package installation is required.

## Important personalisation before submission
1. Replace the `WS` profile placeholder in `index.html` with your own photograph. Keep a copy in `assets/` and use an `<img>` element with descriptive `alt` text.
2. Check the biography and education details in `about.html`; add exact schools, qualifications and dates.
3. Replace sample project descriptions with your own completed work as appropriate.
4. Confirm the email and other contact details in `contact.html` before publishing.
5. The contact form is front-end validation only. It does not email or store messages.
6. The sample audio/video use external demonstration media and require an internet connection.

## Publish with GitHub Pages
1. Sign in at https://github.com/ and create a new repository, for example `cos106-student-portfolio`.
2. Upload the contents of this project folder (not just the ZIP file) to the repository's root. Ensure `index.html` is at the root.
3. Open the repository's **Settings** → **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then save.
6. Wait for GitHub Pages to finish deploying. The public website URL will usually look like `https://YOUR-USERNAME.github.io/cos106-student-portfolio/`.
7. Open the URL and test every page, the planner, contact validation, mobile layout and multimedia.
8. Submit both the live website URL and the GitHub repository URL to your LMS.

## Suggested final checks
- All five navigation links work.
- No page has missing CSS or JavaScript.
- Planner tasks persist after refreshing the page in the same browser.
- Empty fields are rejected on the contact form.
- Invalid email addresses are rejected.
- Phone numbers containing spaces, plus signs or letters are rejected because the assignment asks for digits only.
- Website is readable on a phone-sized screen.
