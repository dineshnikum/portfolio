# Fresher Portfolio

A single-page portfolio built with React to showcase projects, skills, and contact information. It uses smooth section navigation, scroll-triggered animations, typed hero text, and filterable project cards tailored for a junior/MERN stack developer.

## Features
- Responsive layout with fixed header navigation and mobile menu toggle.
- Typed hero headline, CTA buttons, and social links.
- About and skills sections with animated stat cards and progress bars.
- Filterable projects grid with tech badges and code/live links.
- Contact section with form (client-side mock submit), quick contact cards, and social profiles.
- Reusable components with dedicated CSS modules for styling and animations.

## Tech Stack
- React 18 (Create React App)
- CSS for styling and animations
- react-icons for iconography
- react-intersection-observer for scroll-triggered reveals
- react-typed for hero typing effect

## Getting Started
1) Install dependencies
```bash
npm install
```
2) Start the dev server
```bash
npm start
```
The app runs at http://localhost:3000 by default.

3) Build for production
```bash
npm run build
```

## Project Structure
```
src/
  App.js              # Page layout and section order
  components/
    Header.js         # Fixed nav + social links
    Hero.js           # Intro, typed text, hero image
    About.js          # Bio, stats, feature highlights
    Skills.js         # Skill categories with progress bars
    Projects.js       # Filterable project cards
    Contact.js        # Contact info + mock form submit
    Footer.js         # Footer links and tech tags
  *.css               # Section-specific styles
public/
  images/profile-picture.png  # Hero avatar (replace as needed)
```

## Customization Notes
- Update personal details, links, and stats in the component files under `src/components/` (e.g., social URLs in `Header.js`, hero name and description in `Hero.js`, contact info in `Contact.js`, project data in `Projects.js`).
- Replace `public/images/profile-picture.png` with your own photo; adjust alt text in `Hero.js` if needed.
- The contact form currently simulates submission; wire it to a backend or service to make it functional.

## Available Scripts
- `npm start` – Run the development server.
- `npm run build` – Create an optimized production build.
- `npm test` – Run tests (CRA defaults).

## Deployment
After running `npm run build`, deploy the contents of `build/` to any static host (e.g., Netlify, Vercel, GitHub Pages, S3).

