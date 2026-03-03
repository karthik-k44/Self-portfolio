# Karthik Portfolio

A personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

This project showcases:

- Professional profile and social links
- Skills (frontend, backend, database, tools, and soft skills)
- Project cards with image carousel, GitHub links, and demos
- Contact section with a working form
- Resume page with one-click open and download

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- React Router DOM
- Lucide React Icons
- React Responsive Carousel

## Pages and Routes

- `/` - Home
- `/about` - About
- `/skills` - Skills
- `/projects` - Projects
- `/contact` - Contact
- `/resume` - Resume

## Project Highlights

- **CodeFit** - Candidate recruiting app with GitHub profile validation
- **MediTrack** - Medication and appointment management platform
- **Ocean Defender** - Canvas-based JavaScript web game
- **Calorie Calculator** - Calorie search and daily intake helper
- **Self Portfolio** - Personal portfolio site

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Resume Setup

The resume feature is configured in:

- `src/constants/resume.ts`

Current setup expects this file:

- `public/Karthik_K_Resume.pdf`

If you change the resume file name, update:

- `url` and `fileName` in `src/constants/resume.ts`

## Contact

- Email: `karthikkarunakaran444@gmail.com`
- Location: Thrissur, Kerala
- GitHub: `https://github.com/karthik-k44`
- LinkedIn: `https://www.linkedin.com/in/karthik-k-7340342aa/`

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build app
- `npm run preview` - Preview build
- `npm run lint` - Run ESLint
