# ByteSpace

A responsive landing page and authentication UI for **ByteSpace**, an online learning platform, built from a Figma design as a frontend assessment for the Jr. Software Engineer (Frontend) role at Doin Tech Limited.

**Live demo:** https://byte-space-pearl.vercel.app/
**Repository:** https://github.com/farial-robama/ByteSpace

---

## Pages

| Route     | Description                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| `/`       | Landing page: hero, course catalog, learning paths, growth and creator sections, creator CTA, testimonials, footer |
| `/login`  | Sign-in page with email/password fields and social login buttons (bonus)                                           |
| `/signup` | Account creation page (bonus)                                                                                      |

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) with TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Lucide React](https://lucide.dev/) for icons
- Poppins via `next/font/google`
- Deployed on [Vercel](https://vercel.com/)

## Getting started

**Requirements:** Node.js 20 or newer.

```bash
# 1. Clone the repository
git clone https://github.com/farial-robama/ByteSpace.git
cd ByteSpace

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Starts the dev server            |
| `npm run build` | Creates a production build       |
| `npm run start` | Runs the production build        |
| `npm run lint`  | Runs ESLint                      |

## Project structure

```
bytespace/
├── app/
│   ├── layout.tsx            # Root layout, fonts, metadata
│   ├── page.tsx              # Landing page (composes the sections)
│   ├── globals.css           # Tailwind import and theme tokens (brand and lime colors)
│   ├── login/page.tsx
│   └── signup/page.tsx
├── components/
│   ├── sections/             # One file per landing page section
│   │   ├── index.ts          # Barrel export
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── LogoStrip.tsx
│   │   ├── Courses.tsx       # Includes CourseCard
│   │   ├── LearningPaths.tsx
│   │   ├── Growth.tsx
│   │   ├── CreatorCta.tsx
│   │   ├── Testimonials.tsx
│   │   └── Footer.tsx
│   ├── auth/                 # Login and signup UI
│   │   ├── AuthShell.tsx     # Shared two-column layout
│   │   ├── AuthPreview.tsx   # Course cards and shapes beside the form
│   │   ├── Field.tsx         # Reusable labeled input
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── shared/
│   │   └── StudentAvatars.tsx
│   ├── shared.tsx            # Shapes, FloatCard, Avatars, Feature
│   └── ui.tsx                # Container, Logo, LimeButton, SearchBar, SectionHeading, ...
├── lib/
│   └── data.ts               # Content: courses, categories, testimonials, footer links
└── public/
    └── images/
        ├── shapes/           # Exported 3D shapes from Figma
        └── ...               # Course photos, hero and student images, logo mark
```

## Design decisions

- **Section-per-file:** each part of the landing page lives in its own component under `components/sections/`, so sections can be edited, reordered or reused independently.
- **Content separated from layout:** text and course data live in `lib/data.ts`, so the section components contain only markup and styling.
- **Reusable UI:** buttons, headings, containers and form fields are shared instead of repeated.
- **Theme tokens:** the brand blue and lime colors and the font are defined once in `app/globals.css` through Tailwind's `@theme`.
- **Server Components by default:** only files that need interactivity (`ui.tsx`, `Footer.tsx`, and the auth forms) are marked `"use client"`.
- **Optimized images:** photos use `next/image`.
- **Accessibility:** semantic landmarks, labeled form fields, `aria-label` on icon-only buttons, visible focus states, and reduced-motion support for smooth scrolling.

## Notes for reviewers

- The login and signup forms are UI only. They validate input in the browser (required fields, email format, minimum password length on signup) but do not call a backend.
- The search bar and newsletter form are likewise front-end only.
- Social login buttons are visual only.

## Git workflow

Work was done on a feature branch and merged through a pull request, not committed directly to `main`.

```bash
git checkout -b feat/landing-page
git add .
git commit -m "feat: add landing page sections"
git push -u origin feat/landing-page
# then open a Pull Request into main on GitHub
```

## Deployment

1. Push the repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Keep the default Next.js settings and deploy.

Before deploying, run `npm run build` locally to catch errors early.

## License

Created for assessment purposes. The ByteSpace design belongs to its original authors.