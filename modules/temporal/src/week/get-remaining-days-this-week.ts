import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets the number of remaining days for the current week
 * @returns Number of remaining days for the current week
 */
export function getRemainingDaysThisWeek(): number {
  const now = Temporal.Now.plainDateISO();
  return 7 - now.dayOfWeek;
}
