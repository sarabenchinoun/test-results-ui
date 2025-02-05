# Test Results UI

### Tech Stack:
- PNPM
- React 19
- Next.js 15
- TypeScript
- Tailwind CSS 4
- Biome

## Decisions:
- **PNPM**: I used PNPM as the package manager for this project. I have found it to be the fastest and more efficient. Also if I use a Monorepo, it has good workspace support [See here for more details](https://pnpm.io/workspaces)
- **Next.js 15**: Next 15 comes with react 19 by default and all of its new features, such as React Server Components, and directives such as 'use client' for client components and 'use server' for server actions etc. As an added bonus I added the Next experimental React compiler which is an added performance tool for react. The compiler decides how and when to memoise components, functions or hooks. [See here for more details](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler)
- **Tailwind CSS 4**: I used TailwindCSS for several reasons. It is a very quick and easy method to style html very quickly and easily, allowing me to stay in context of the file I am working in, and also a decent looking set of css out the box. I find it easy to write, and understand. So I used it for this project. Tailwind CSS 4 is even more enjoyable due to its CSS first config and approach. [See here for more details](https://tailwindcss.com/)
- **Biome**: I used Biome for Formatting & Linting. Its so quick and enjoyable to work with, very easy to setup and customise. I have always found Eslint & prettier difficult to use and make them work together easily. Biome removes that burden from me totally. [See here for more details](https://biomejs.dev/)
- **Phosphor Icons**: I used Phosphor Icons for the icons in the project. They are a very nice set of icons that are very easy to use and look great. Plus they seem to be one of the few libraries of Icons that support server components out the box. [See here for more details](https://phosphoricons.com/)
- **npm-run-all**: I used npm-run-all to run multiple scripts in parallel. This is a very useful tool for running multiple scripts at the same time, I've used it in this project to run the linting, typechecking and building of the project at the same time. See `validate` script in `package.json` [See here for more details](https://github.com/mysticatea/npm-run-all)

