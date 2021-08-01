import type { Temporal } from '@js-temporal/polyfill';

/**
 * Tests whether two time zones are identical
 * @param lhs Left-hand time zone
 * @param rhs Right-hand time zone
 * @returns true if `lhs` and `rhs` point to the same time zone
 */
export function isSameTimeZone(lhs: Temporal.TimeZone, rhs: Temporal.TimeZone): boolean {
  return lhs.id === rhs.id;
}
