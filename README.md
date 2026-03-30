# number-to-ordinal

Tiny, zero-dependency, tree-shakable utility to convert numbers into English ordinal strings.

## Install

```bash
npm i number-to-ordinal
```

## Usage

```ts
import { toOrdinal, getOrdinalSuffix } from 'number-to-ordinal';

toOrdinal(1); // "1st"
toOrdinal(22); // "22nd"
toOrdinal(103); // "103rd"
toOrdinal(11); // "11th"
```

## API

```ts
toOrdinal(number: number, options?: OrdinalOptions): string
getOrdinalSuffix(number: number): 'st' | 'nd' | 'rd' | 'th'
```

### `toOrdinal(n, options?)`

Converts a number to an English ordinal.

```ts
toOrdinal(0); // "0th"
toOrdinal(1); // "1st"
toOrdinal(2); // "2nd"
toOrdinal(3); // "3rd"
toOrdinal(4); // "4th"
toOrdinal(11); // "11th"
toOrdinal(12); // "12th"
toOrdinal(13); // "13th"
toOrdinal(21); // "21st"
toOrdinal(101); // "101st"
toOrdinal(111); // "111th"
toOrdinal(1000); // "1000th"
toOrdinal(3.7); // "3rd"
toOrdinal(-5); // "-5th"
toOrdinal(Number.NaN); // "NaNth"
```

### Options

```ts
interface OrdinalOptions {
  suffixOnly?: boolean; // default false
  locale?: 'en'; // reserved for future support
}
```

```ts
toOrdinal(1, { suffixOnly: true }); // "st"
```

### `getOrdinalSuffix(n)`

Returns only the ordinal suffix:

```ts
getOrdinalSuffix(42); // "nd"
```

## Why this package

- Zero runtime dependencies.
- Tiny focused API.
- ESM + CJS output.
- TypeScript types included.
- Tree-shakable (`sideEffects: false`).

Performance note: for ordinal formatting use-cases, this package stays dramatically smaller than general utility bundles (often over 100x lighter than importing broad helpers from large libraries such as lodash).

## Comparison

| Package | Scope | Dependencies | Types | Approx Install Weight |
| --- | --- | --- | --- | --- |
| number-to-ordinal | Ordinals only | 0 | Built-in | Tiny |
| number-to-words libs | Full number words | Often >0 | Varies | Larger |
| Generic utility libs | Many helpers | Varies | Varies | Much larger |

## Development

```bash
npm install
npm run build
npm run test
```

See `docs/STEPS.md` for full setup, testing, and publishing flow.

## Support

- Sponsor: [GitHub Sponsors](https://github.com/sponsors/bharath)
- Star the repo if it helps your project.

## License

MIT
