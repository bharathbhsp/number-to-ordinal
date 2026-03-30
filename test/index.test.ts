import { describe, expect, it } from 'vitest';
import { getOrdinalSuffix, toOrdinal } from '../src/index';

describe('toOrdinal examples from PRD', () => {
  it('formats base and edge values correctly', () => {
    expect(toOrdinal(0)).toBe('0th');
    expect(toOrdinal(1)).toBe('1st');
    expect(toOrdinal(2)).toBe('2nd');
    expect(toOrdinal(3)).toBe('3rd');
    expect(toOrdinal(4)).toBe('4th');
    expect(toOrdinal(11)).toBe('11th');
    expect(toOrdinal(12)).toBe('12th');
    expect(toOrdinal(13)).toBe('13th');
    expect(toOrdinal(21)).toBe('21st');
    expect(toOrdinal(22)).toBe('22nd');
    expect(toOrdinal(103)).toBe('103rd');
    expect(toOrdinal(101)).toBe('101st');
    expect(toOrdinal(111)).toBe('111th');
    expect(toOrdinal(1000)).toBe('1000th');
    expect(toOrdinal(3.7)).toBe('3rd');
  });

  it('supports negative values and NaN behavior', () => {
    expect(toOrdinal(-5)).toBe('-5th');
    expect(toOrdinal(Number.NaN)).toBe('NaNth');
  });
});

describe('options', () => {
  it('returns suffix only when requested', () => {
    expect(toOrdinal(1, { suffixOnly: true })).toBe('st');
    expect(toOrdinal(12, { suffixOnly: true })).toBe('th');
    expect(toOrdinal(-23.9, { suffixOnly: true })).toBe('th');
  });
});

describe('getOrdinalSuffix', () => {
  it('returns exact suffix values', () => {
    expect(getOrdinalSuffix(1)).toBe('st');
    expect(getOrdinalSuffix(2)).toBe('nd');
    expect(getOrdinalSuffix(3)).toBe('rd');
    expect(getOrdinalSuffix(4)).toBe('th');
    expect(getOrdinalSuffix(11)).toBe('th');
    expect(getOrdinalSuffix(12)).toBe('th');
    expect(getOrdinalSuffix(13)).toBe('th');
    expect(getOrdinalSuffix(101)).toBe('st');
    expect(getOrdinalSuffix(102)).toBe('nd');
    expect(getOrdinalSuffix(103)).toBe('rd');
  });
});

describe('property-style randomized checks (0..10,000)', () => {
  it('always matches a reference algorithm for 2,000 random cases', () => {
    const reference = (n: number) => {
      const value = Math.floor(n);
      const abs = Math.abs(value);
      const mod100 = abs % 100;
      if (mod100 >= 11 && mod100 <= 13) return `${String(value)}th`;
      const mod10 = abs % 10;
      if (mod10 === 1) return `${String(value)}st`;
      if (mod10 === 2) return `${String(value)}nd`;
      if (mod10 === 3) return `${String(value)}rd`;
      return `${String(value)}th`;
    };

    for (let i = 0; i < 2000; i += 1) {
      const n = Math.floor(Math.random() * 10001);
      expect(toOrdinal(n)).toBe(reference(n));
    }
  });
});

describe('README examples snapshot', () => {
  it('keeps usage output stable', () => {
    const output = [
      toOrdinal(1),
      toOrdinal(22),
      toOrdinal(103),
      toOrdinal(11),
      toOrdinal(0),
      toOrdinal(1000),
      toOrdinal(3.7)
    ].join(', ');

    expect(output).toMatchInlineSnapshot(
      '"1st, 22nd, 103rd, 11th, 0th, 1000th, 3rd"'
    );
  });
});
