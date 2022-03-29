import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns the current year
 * @returns Current year
 */
export function getThisYear(): number {
  const now = Temporal.Now.plainDateISO();
  return now.year;
}
