# Test Results UI

[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC)](https://tailwindcss.com/)

A simple web application for displaying and managing test results.

### Tech Stack:
- PNPM
- React 19
- Next.js 15
- TypeScript
- Tailwind CSS 4
- Biome

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PNPM (v8 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/sarabenchinoun/test-results-ui

# Navigate to the project directory
cd test-results-ui

# Install dependencies
pnpm install
```

### Development
```bash
# Start the development server
pnpm dev

# Run type checking
pnpm typecheck

# Run linting
pnpm lint

# Run all checks and build
pnpm validate
```

## Project Structure
```
├── app/                # Next.js app directory
├── backend/            # Backend API and data handling
├── components/         # Reusable UI components
├── utils/              # Utility functions and helpers
└── public/             # Static assets
```

## Decisions:
- **PNPM**: I used PNPM as the package manager for this project. I have found it to be the fastest and more efficient. Also if I use a Monorepo, it has good workspace support [See here for more details](https://pnpm.io/workspaces)

- **Next.js 15**: Next 15 comes with react 19 by default and all of its new features, such as React Server Components, and directives such as 'use client' for client components and 'use server' for server actions etc. As an added bonus I added the Next experimental React compiler which is an added performance tool for react. The compiler decides how and when to memoise components, functions or hooks. [See here for more details](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler)

- **Tailwind CSS 4**: I used TailwindCSS for several reasons. It is a very quick and easy method to style html very quickly and easily, allowing me to stay in context of the file I am working in, and also a decent looking set of css out the box. I find it easy to write, and understand. So I used it for this project. Tailwind CSS 4 is even more enjoyable due to its CSS first config and approach. [See here for more details](https://tailwindcss.com/)

- **Biome**: I used Biome for Formatting & Linting. Its so quick and enjoyable to work with, very easy to setup and customise. I have always found Eslint & prettier difficult to use and make them work together easily. Biome removes that burden from me totally. [See here for more details](https://biomejs.dev/)

- **Phosphor Icons**: I used Phosphor Icons for the icons in the project. They are a very nice set of icons that are very easy to use and look great. Plus they seem to be one of the few libraries of Icons that support server components out the box. [See here for more details](https://phosphoricons.com/)

- **npm-run-all**: I used npm-run-all to run multiple scripts in parallel. This is a very useful tool for running multiple scripts at the same time, I've used it in this project to run the linting, typechecking and building of the project at the same time. See `validate` script in `package.json` [See here for more details](https://github.com/mysticatea/npm-run-all)

- **clsx & tailwind merge**: I used clsx and tailwind merge to combine Tailwind CSS classes and ensure class overrides happen correctly.

- **UI Components**: I used libraries such as Shadcn and Tailwind UI for consistency and speed.


## Scripts

- `pnpm dev` - Start the development server with Turbopack
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run Biome checks
- `pnpm lint:fix` - Run Biome checks and fix issues
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm validate` - Run all checks in parallel


## Accessibility

This project follows WCAG guidelines and best practices for web accessibility:

- **Component Architecture**: Built with accessible Radix UI primitives, ARIA-compliant components
- **Semantic Structure**: Proper HTML5 elements, logical heading hierarchy
- **Visual Design**: WCAG compliant contrast, clear visual feedback
- **User Interaction**: Full keyboard support, visible focus states


## Licence

MIT
