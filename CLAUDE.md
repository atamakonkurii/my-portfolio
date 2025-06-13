# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

```bash
yarn dev              # Start development server (Next.js + pathpida watch)
yarn storybook        # Start Storybook for component development
```

### Build & Production

```bash
yarn build            # Build for production (generates paths + Next.js build)
yarn start            # Start production server
yarn serve            # Build and start production server
```

### Testing

```bash
yarn test             # Run all tests (lint + prettier + unit tests in parallel)
yarn unit             # Run Jest unit tests only
yarn e2e              # Run Playwright E2E tests
yarn test --watch     # Run unit tests in watch mode
yarn test path/to/test # Run specific test file
```

### Code Quality

```bash
yarn lint             # Run ESLint
yarn prettier         # Check Prettier formatting
yarn fix              # Fix all linting and formatting issues
yarn fix:lint         # Fix ESLint issues only
yarn fix:prettier     # Fix Prettier formatting only
```

## Architecture

### Tech Stack

- **Framework**: Next.js 12 with TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **CMS**: microCMS (headless CMS)
- **State**: React hooks (no global state management)
- **Testing**: Jest + React Testing Library + Playwright
- **Mocking**: MSW (Mock Service Worker)

### Project Structure

The codebase follows a hybrid structure combining Next.js conventions with Atomic Design:

- **pages/**: Next.js routing endpoints that import from src/pages/
- **src/pages/**: Page-specific logic and data fetching
- **src/component/**: UI components organized by Atomic Design
  - atoms/: Basic building blocks (buttons, text elements)
  - molecules/: Composite components
  - organisms/: Complex sections (LandingPage components)
  - templates/: Page templates with layout
  - layout/: Layout components (StandardHeader, StandardFooter)

### Data Flow

1. **Static Generation**: All pages use `getStaticProps` for build-time data fetching
2. **microCMS Integration**: News and content fetched via microCMS client at build time
3. **RSS Feeds**: Author's blog posts fetched from Qiita and Zenn RSS feeds
4. **Type Safety**: pathpida generates type-safe routing from file structure

### Key Patterns

- **Custom Layout System**: Pages use `getLayout` pattern for consistent layouts
- **Environment-based Mocking**: MSW automatically activates in development
- **Component Stories**: All UI components have corresponding .stories.tsx files
- **Type-safe Routing**: Use `pagesPath` from src/lib/$path.ts for internal links

### Environment Variables

- `CMS_API_KEY`: microCMS API key (required)
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: Google Analytics tracking ID (optional)

### Important Notes

- The site is optimized for static hosting on Cloudflare Pages
- All data fetching happens at build time (no client-side API calls)
- The project name "nexst-tailwind" is historical; this is a portfolio site
- Stripe Payment Links are used for the "おごる" (treat/donate) feature
