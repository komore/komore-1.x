import { Temporal } from '@js-temporal/polyfill';

/**
 * Tests whether a plain time is noon
 * @param temporal Temporal with time
 * @returns true if the plain time is noon
 */
export function isNoon(time: Temporal.PlainTime): boolean {
  const noon = Temporal.PlainTime.from('12:00');
  return time.until(noon).sign === 0;
}
