# Nina Marmaridou - Custom Website Content Guide

Welcome to the custom source code for the new, modern ninamarmaridou.com website.
This site uses a lightweight framework (Vite) alongside Vanilla JavaScript, CSS, and GSAP for complex animations. It does not rely on WordPress, meaning it is incredibly fast, custom, and secure.

## 1. Managing Text and Translations
The site has an integrated English/Greek language switcher. Any non-project text you see on the site is centralized in one file.
1. Open the file `src/i18n.js`.
2. Find the `dict` object at the top.
3. Every piece of text is defined by a key (e.g., `home_hero_title`) with an `en` (English) and `el` (Greek) translation.
4. Simply alter the text between the quotes `""` for whichever string you'd like to update.

## 2. Managing Projects (Homepage Scroller & Project Pages)
The scrolling "Apple-style" projects list on the homepage and the individual project detail pages are generated dynamically from one configuration file.
1. Open `src/data.js`.
2. Notice the `projectsData` array containing objects. Each object `{ ... }` is a project.
3. **Editing:** Change the `title` or `description` strings for both languages, or tweak the `bgColor` parameter to alter the backdrop color during the scroll.
4. **Adding a Project:** Add a new `{ ... }` object by copying an existing one. Ensure the `id` is unique (e.g., `id: 'my-new-project'`). Update the `images` array with paths to images you drop into the `public/` folder.
5. **Removing:** Delete the `{ ... }`, and the GSAP scroll timeline will automatically adjust.

## 3. Managing Fixed Imagery (About, Services)
Images for static pages are configured directly inside the code since there are only a few.
- Put your new images inside the `public/` folder.
- **Services Photos:** Open `src/pages/Services.js` and edit the `const images = [...]` array to point to your new file names.
- **About Photo:** Open `src/pages/About.js` and change the source path `<img src="...">` within the code.
- **Logos:** Drop your new logo inside `public/` and update the `src` attribute of the logo tag in `index.html`.

## 4. How to Preview and Deploy
- **Development:** Ensure you have Node.js installed. Open a terminal in this folder and run `npm install`, then run `npm run dev`. Your site will open locally on your machine and instantly update as you edit files. 
- **Going Live:** When you are satisfied with your changes and ready to deploy to your hosting provider (like Vercel, Netlify, or standard shared hosting), run `npm run build`. This creates a heavily compressed, production-ready version of your code inside the newly created `dist/` folder. You upload the contents of `dist/` to your server.
