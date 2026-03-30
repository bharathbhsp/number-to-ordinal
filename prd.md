**Product Requirements Document (PRD)**  
**Project:** `number-to-ordinal`  
**Version:** 1.0.0 (MVP)  
**Author:** Bharath  
**Date:** March 30, 2026  
**Status:** Ready for Development  

### 1. Overview
**Package Name:** `number-to-ordinal` (confirmed available on npm as of today)

A tiny, zero-dependency, tree-shakable utility that converts positive integers into their English ordinal string representation (1st, 2nd, 3rd, 11th, 21st, 101st, etc.).

**One-line example:**
```ts
import { toOrdinal } from 'number-to-ordinal';

toOrdinal(1);    // '1st'
toOrdinal(22);   // '22nd'
toOrdinal(103);  // '103rd'
toOrdinal(11);   // '11th'
```

### 2. Problem Statement
Developers constantly need ordinal suffixes in:
- Leaderboards / rankings
- Date formatting (“1st March”)
- UI labels (“You are the 42nd user”)
- Forms, reports, invoices, analytics dashboards

Existing solutions are either:
- Bloated (full number-to-words libraries)
- Outdated / abandoned
- Not focused purely on ordinals
- Missing proper TypeScript support

`number-to-ordinal` fills this gap with a **single-purpose**, modern, lightweight package (< 500 bytes gzipped).

### 3. Goals
- **Primary:** Provide the simplest, fastest, most reliable way to get ordinal strings in JavaScript/TypeScript.
- **Secondary:** Become the go-to micro-utility for ordinal formatting (target: 5k+ weekly downloads in first 6 months).
- Make it beginner-friendly yet production-ready.

### 4. Target Audience
- Frontend developers (React, Vue, Svelte, etc.)
- Backend / Node.js developers
- Full-stack devs building UIs, dashboards, PDFs, emails
- Open-source contributors looking for tiny, high-impact packages

### 5. Functional Requirements

**Core Function**
```ts
toOrdinal(number: number, options?: OrdinalOptions): string
```

**Default Behavior**
- Accepts any number → internally uses `Math.floor()` for safety.
- Returns English ordinal string (st, nd, rd, th).
- Handles all edge cases correctly (11th–13th, 21st, 101st, etc.).

**Options (Optional)**
```ts
interface OrdinalOptions {
  suffixOnly?: boolean;     // default: false → returns "1st" vs "st"
  locale?: 'en';            // v1.1+ (future)
}
```

### 6. API Specification (Final)

```ts
// Main export
export function toOrdinal(n: number, options?: OrdinalOptions): string;

// Bonus exports (nice-to-have)
export function getOrdinalSuffix(n: number): 'st' | 'nd' | 'rd' | 'th';
```

**Examples**
```ts
toOrdinal(0);        // '0th'
toOrdinal(1);        // '1st'
toOrdinal(2);        // '2nd'
toOrdinal(3);        // '3rd'
toOrdinal(4);        // '4th'
toOrdinal(11);       // '11th'
toOrdinal(12);       // '12th'
toOrdinal(13);       // '13th'
toOrdinal(21);       // '21st'
toOrdinal(101);      // '101st'
toOrdinal(111);      // '111th'
toOrdinal(1000);     // '1000th'
toOrdinal(3.7);      // '3rd'   (floors)
```

### 7. Non-Functional Requirements
- **Size:** < 500 bytes gzipped
- **Dependencies:** Zero
- **Runtime:** Node.js ≥ 18, modern browsers
- **Formats:** ESM + CJS (dual package)
- **TypeScript:** Full types + JSDoc
- **Performance:** O(1) – simple modulo math
- **License:** MIT
- **Bundle-friendly:** Fully tree-shakable

### 8. Edge Cases & Error Handling
- `toOrdinal(NaN)` → `'NaNth'` (or throw in strict mode – decided as return string for simplicity)
- Negative numbers → `toOrdinal(-5)` → `'-5th'`
- Very large numbers (BigInt not needed for MVP)
- Zero → `'0th'`
- Non-number input → TypeScript catches at compile time; runtime coerces via `Math.floor`

### 9. Technical Stack (Recommended)
- Language: TypeScript
- Build: `tsc` + `pkgroll` or `tsup` (for dual ESM/CJS)
- Testing: Vitest or Node.js built-in test runner
- Linting: ESLint + Prettier
- No external deps

### 10. Testing Requirements
- Unit tests for all examples above
- 100% coverage on core logic
- Property-based testing for random numbers 0–10,000
- Snapshot tests for README examples

### 11. Documentation & README
Must include:
- One-line install + usage
- All examples from this PRD
- Performance note (“lighter than lodash by 100x”)
- Comparison table vs existing packages
- GitHub Sponsors / funding link
- Star request

### 12. Publishing Plan
- Package name: `number-to-ordinal`
- Scope: Public (no `@` scope needed)
- Initial version: `1.0.0`
- Post-publish: Share on r/javascript, r/node, X, LinkedIn, dev.to

### 13. Success Metrics
- Week 1: 500+ downloads
- Month 1: 2k+ weekly downloads
- Month 3: 5k+ weekly downloads + GitHub stars
- GitHub Sponsors activated with first ₹1,000–5,000/month

### 14. Roadmap (Post-MVP)
- v1.1: Multi-language support (en, fr, es, de, etc.)
- v1.2: `toOrdinalWords()` → “first”, “twenty-second”
- v2.0: Date integration helper (`formatOrdinalDate`)

---

**Next Steps for You**
1. Copy this PRD into a `PRD.md` file in your repo.
2. I can now generate:
   - Full `package.json`
   - Complete `src/index.ts` implementation
   - README.md (ready to publish)
   - Test file
   - GitHub Sponsors setup text