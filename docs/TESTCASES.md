# Test Cases

## Core examples

- `toOrdinal(0) -> "0th"`
- `toOrdinal(1) -> "1st"`
- `toOrdinal(2) -> "2nd"`
- `toOrdinal(3) -> "3rd"`
- `toOrdinal(4) -> "4th"`
- `toOrdinal(11) -> "11th"`
- `toOrdinal(12) -> "12th"`
- `toOrdinal(13) -> "13th"`
- `toOrdinal(21) -> "21st"`
- `toOrdinal(101) -> "101st"`
- `toOrdinal(111) -> "111th"`
- `toOrdinal(1000) -> "1000th"`

## Edge and safety behavior

- Floor behavior: `toOrdinal(3.7) -> "3rd"`
- Negative handling: `toOrdinal(-5) -> "-5th"`
- NaN behavior: `toOrdinal(NaN) -> "NaNth"`
- Suffix-only mode: `toOrdinal(1, { suffixOnly: true }) -> "st"`

## getOrdinalSuffix

- `getOrdinalSuffix(1) -> "st"`
- `getOrdinalSuffix(2) -> "nd"`
- `getOrdinalSuffix(3) -> "rd"`
- `getOrdinalSuffix(4) -> "th"`
- Teen guard: 11/12/13 -> `"th"`

## Property-style randomized checks

- Run 2,000 random integers in `[0, 10000]`.
- Compare output with independent reference implementation.

## Snapshot check

- Validate stable README usage output:
  - `"1st, 22nd, 103rd, 11th, 0th, 1000th, 3rd"`
