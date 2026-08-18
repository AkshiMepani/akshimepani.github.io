# Akshi Mepani — Data Analytics Portfolio

A responsive, editable portfolio built for GitHub Pages. It is inspired by the section flow of the supplied reference portfolio, but uses an original data-analytics visual system and content tailored to Akshi's CV.

## Publish on GitHub Pages

1. Create a new public GitHub repository. Recommended name: `YOUR-USERNAME.github.io`.
2. Upload all files and folders from this package to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/root`, then save.
6. The website will be available at `https://YOUR-USERNAME.github.io/`.

For a normal repository such as `portfolio`, the address will usually be `https://YOUR-USERNAME.github.io/portfolio/`.

## Add or edit projects

Open `projects.js`. Each project is one object inside the `projects` array.

- Duplicate an existing `{ ... }` project object.
- Change its category, title, description, highlights, tools, repository link, and demo link.
- Keep a comma between project objects.
- Use `#` for links that are not ready.

No HTML editing is required to add a project card.

## Important updates before publishing

- In `index.html`, replace `https://github.com/YOUR-USERNAME` with Akshi's actual GitHub profile.
- Confirm the email and LinkedIn URL.
- Replace placeholder project links in `projects.js`.
- Add project screenshots later if desired.
- The CV download is stored at `assets/Akshi-Mepani-CV.docx`.

## Main files

- `index.html` — page content
- `styles.css` — design and responsive layout
- `projects.js` — editable project information
- `script.js` — project rendering, navigation, and animations
- `assets/` — CV and future images
