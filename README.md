# advanced-forms (Book App)

A small book-catalog app used for the devonfw-ng-adv-training reactive-forms / CVA exercises. Angular 22, NgModule-based, Reactive Forms + Angular Material, zoneless change detection.

## Development

Start the Angular dev server and the dev API server together:

```bash
npm start
```

This proxies `/api` requests (see `proxy.conf.json`) to the Express dev server on port 9100, and serves the Angular app on `http://localhost:4200/`.

To run only the dev API server:

```bash
npm run server
```

## Building

```bash
npm run build
```

Build artifacts are written to `dist/`.

## Unit tests

```bash
npm test
```

Runs the [Vitest](https://vitest.dev/) test runner.

## End-to-end tests

```bash
npm run e2e
```

Runs [Playwright](https://playwright.dev/) against the app (`webServer` in `playwright.config.ts` starts the app automatically). Browser binaries must be installed once with `npx playwright install chromium`.

## Linting

```bash
npx ng lint
```

