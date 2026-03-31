# Steps: Setup, Test, Publish

## 1) Local setup

```bash
npm install
```

## 2) Run quality checks

```bash
npm run typecheck
npm run test
```

Coverage target is configured to 100% for core logic.

## 3) Build distributable package

```bash
npm run build
```

Artifacts are generated in `dist/`:

- `index.js` (ESM)
- `index.cjs` (CommonJS)
- `index.d.ts` (types)

## 4) Verify package contents

```bash
npm pack --dry-run
```

Check that only intended files are published (`dist`, `README.md`, `LICENSE`).

## 5) Publish to npm

```bash
npm login
npm publish --access public 
```

## 6) Post-publish checklist

- Confirm package page metadata and README rendering on npm.
- Announce release on r/javascript, r/node, X, LinkedIn, and dev.to.
- Add package link to repository description.
