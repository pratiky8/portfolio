# Pratik Yadav — portfolio

A responsive, recruiter-focused React + Vite portfolio. Lucide icons, CSS styling, inline SVG architecture diagrams, dark/light theme, filterable projects, skill categories and expandable project plans. No backend or credentials required.

## Run locally

Install Node.js 20.19+ or a supported newer LTS release, then in this directory:

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite (normally http://localhost:5173). Stop with Ctrl+C.

## Production

```sh
npm run build
npm run preview
```

Open the printed preview URL (normally http://localhost:4173). The production output is in `dist/`.

Deploy to a static host such as Netlify, Vercel or Cloudflare Pages: build command `npm run build`, output directory `dist`. No environment variables are needed. For hosting under a subdirectory, set Vite's `base` option to that subdirectory before building. Serve through HTTPS in production.

## Personalize before sharing

Edit `src/data.js`:

- `profile.email`: configured as `pratiky0822@gmail.com`, used for working mailto links.
- `profile.phone` and `profile.phoneDisplay`: configured as `+919450676821` and `+91 94506 76821`, used for telephone links.
- `profile.github` and `profile.linkedin`: configured with your supplied profile URLs; external links open in new tabs with `noopener noreferrer`.
- `projects[].repo`: real full repository URLs once available.
- Place your actual PDF at `public/Pratik-Yadav-Resume.pdf`, then set `profile.resume` to `/Pratik-Yadav-Resume.pdf`. Verify the PDF downloads. A fake PDF is intentionally not included; until configured, resume controls clearly show a coming-soon placeholder.

Update the biography and project/lab statuses in `src/main.jsx` only when supported by your experience. All proposed projects and hands-on labs are currently marked Planned because no source code or completion evidence was supplied. Project plans describe goals, not accomplishments. Diagrams are conceptual; the VPC graphic shows subnet membership, not deployment evidence or a complete secure routing design. The Docker graphic summarizes request and data flow rather than an executable configuration.

The current React portfolio is implemented; the separately listed React application remains a project idea. No employment, certifications, metrics or GitHub activity are asserted. Missing social links render as labeled noninteractive placeholders. There is no contact form or fabricated submission success; adding an email enables a real mailto action using the visitor's mail application.

Set a canonical URL and `og:url` after choosing a domain; optionally add an actual social preview image and `og:image` in `index.html`. Review title and description there. Favicon: `public/favicon.svg`.

## Structure

- `src/main.jsx`: reusable UI components and page sections.
- `src/data.js`: profile, skill and project configuration.
- `src/styles.css`: responsive styles, theme tokens and reduced-motion support.
- `public/`: static assets and future resume PDF.
- `index.html`: SEO metadata and application entry.

Google Fonts is optional: system sans-serif fallbacks are used if offline. The only runtime dependencies are React, React DOM and Lucide. Theme preference is stored locally when browser storage is available.

## Cinematic presentation and motion

The hero combines oversized line-by-line type with a bespoke inline SVG cloud sculpture. The stable headline is separate from decorative rotating AWS CLOUD / DEVOPS / SOFTWARE text. A short scroll-linked movement scales and shifts the cloud layers as the hero darkens; no scroll pinning or scroll hijacking is used. About text progressively brightens. Project cards have conceptual visual previews, viewport entrances and restrained interaction effects. The Contact section uses a blue/cyan gradient. A decorative marquee uses only supplied skills.

CSS handles simple effects. The reusable useSceneMotion hook uses IntersectionObserver, the Web Animations API and a passive scroll listener throttled with requestAnimationFrame. Effects clean up observers, listeners, frame requests and running animations on unmount, on preference changes and on filter changes. React Strict Mode is enabled. Content is visible by default even if observer/animation setup fails. Reduced-motion settings disable decorative motion and smooth scrolling; all rotating labels and marquee skills become static. The hero's Pause motion control pauses ambient CSS effects and disables scroll/reveal motion. Mobile uses normal stacked composition without hero parallax or sticky About copy. No animation dependencies were added.

### Portrait integration

The shared portrait path is /images/pratik-yadav.jpeg. Put the original JPEG at public/images/pratik-yadav.jpeg. That file was missing from the supplied workspace, so actual image loading and face framing cannot yet be verified. No placeholder photo, generated likeness or transparent cutout has been substituted.

Desktop now uses separate hero text and image columns. Mobile stacks them. The hero preserves the whole image with object-fit: contain and top alignment; the About reuse crops from the top with object-fit: cover. A subtle gradient mask and edge overlay blend the original rectangular image into a navy frame, with restrained cyan/blue lighting behind it. Explicit image dimensions and CSS aspect-ratio reserve space independently of loading. Those dimensions are layout reservations, not measured metadata of the missing file.

A gentle entrance and bounded scroll movement animate the hero frame. About uses the same URL for a closer crop and decorative, alt-empty echo, with scroll-linked opacity and transform changes. Mobile removes parallax and the echo; reduced-motion disables motion and shows the main photo at full opacity. Image failure renders the existing cloud illustration without broken image icons. The SVG artwork is in src/CloudSculpture.jsx; reusable image handling lives in src/Portrait.jsx and framing in src/portrait.css.

No resume PDF was found; the clearly marked resume placeholder and conditional real-download support are preserved. Add the PDF and configure profile.resume as described above. Project plans and conceptual diagrams remain explicitly labeled. All contact information stays in src/data.js; the email links use mailto:pratiky0822@gmail.com and phone links use tel:+919450676821.

### Files for the redesign

- src/Cinematic.jsx: hero, cloud SVG, marquee, project previews and readable About text.
- src/useSceneMotion.js: scroll/viewport animation lifecycle.
- src/cinematic.css: the new art direction, responsive layouts and motion overrides.
- src/main.jsx: retained sections, navigation and reusable existing controls.

The redesign follows the written brief; screenshot attachments were not available in the conversation.

### Verification

Production build passed. Local headless Chrome checked 1440, 768, 390 and 320 pixel viewports with no document overflow or headline clipping. Interaction checks passed for the mobile menu, anchor navigation, project filters, expandable plans, theme toggle, conceptual diagram selection, motion pause, sticky header and keyboard focus. Reduced-motion checks passed both on initial load and after preference changes (zero running animations; smooth scrolling disabled). An unavailable-IntersectionObserver check confirmed content remains visible. No page runtime errors were reported. Temporary screenshots are in the ignored .qa/ directory.

### Portrait update verification

Production build and local preview checks are run after the portrait integration. The original JPEG is missing, so the actual portrait load remains unverified; the image-error fallback can be checked. Add the JPEG and review the real head/face framing on desktop and mobile before sharing.

Portrait-layout verification passed in local Chrome at 1440, 900, 768, 390 and 320 pixel widths: both reserved image frames remain visible through cloud-art fallbacks, with no text/frame overlap, clipped headlines or horizontal overflow. Contact links were preserved. Reduced motion showed zero running animations and no hero transform. No JavaScript runtime errors were reported. The requested JPEG did not load: it is absent, and the development host returned HTML for that missing URL rather than an image. Actual portrait framing remains pending the original file.
#   p o r t f o l i o  
 