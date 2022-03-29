import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets the number of elapsed days since the start of the current year
 * @returns Number of elapsed days since the start of the current year
 */
export function getElapsedDaysThisYear(): number {
  const now = Temporal.Now.plainDateISO();
  return now.dayOfYear - 1;
}
