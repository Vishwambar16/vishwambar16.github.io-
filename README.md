# Vishwambar Waghamode - Portfolio

A static website (plain HTML, CSS and JavaScript). No build step, no installs.

## Files
- `index.html` - page structure and text (hero, about, resume, contact, footer)
- `style.css` - design, dark/light themes, background
- `script.js` - skills graph data, project pages, theme toggle
- `assets/Vishwambar_Waghamode-Cloud.pdf` - resume (used by the Download button)
- `assets/photo.jpg` - your photo (already included)

## Change your photo
Replace `assets/photo.jpg` with another image. A portrait with a 4:5 ratio (for example 640x800 px) fits the frame best.

## Preview locally
Double-click `index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.

## Publish with GitHub Pages (free)
1. Sign in at github.com and click New repository.
2. Name it `vishwambar16.github.io` (your username + `.github.io`), set it to Public, and create it.
3. Click Add file > Upload files. Drag in the CONTENTS of this folder (index.html, style.css, script.js and the assets folder), not the folder itself. Commit the changes.
4. Open Settings > Pages. Under Build and deployment, choose Deploy from a branch, select `main` and `/ (root)`, then Save.
5. Wait one to two minutes. Your site is live at https://vishwambar16.github.io

## Publish with Netlify (fastest, no Git needed)
Go to app.netlify.com/drop and drag this whole folder onto the page. You get a public link immediately, and you can rename it in Site settings.

## Editing
- Skills and percentages: `script.js`, the `S` list
- Projects and their pages: `script.js`, the `P` object
- Bio, education, contact: `index.html`
- Colors: the variables at the top of `style.css`
