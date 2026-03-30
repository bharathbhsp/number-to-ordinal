export interface OrdinalOptions {
  /**
   * When true, only return the suffix (e.g. "st" for 1).
   * @default false
   */
  suffixOnly?: boolean;
  /**
   * Reserved for future locales. Only "en" is supported in v1.
   */
  locale?: 'en';
}

export type OrdinalSuffix = 'st' | 'nd' | 'rd' | 'th';

function getOrdinalSuffixFromInteger(value: number): OrdinalSuffix {
  const abs = Math.abs(value);
  const mod100 = abs % 100;

  if (mod100 >= 11 && mod100 <= 13) return 'th';

  const mod10 = abs % 10;
  if (mod10 === 1) return 'st';
  if (mod10 === 2) return 'nd';
  if (mod10 === 3) return 'rd';
  return 'th';
}

/**
 * Returns English ordinal suffix for a number.
 */
export function getOrdinalSuffix(n: number): OrdinalSuffix {
  const value = Math.floor(n);
  return getOrdinalSuffixFromInteger(value);
}

/**
 * Converts a number to its English ordinal representation.
 */
export function toOrdinal(n: number, options: OrdinalOptions = {}): string {
  const value = Math.floor(n);
  const suffix = getOrdinalSuffixFromInteger(value);

  if (options.suffixOnly) return suffix;

  return `${String(value)}${suffix}`;
}
