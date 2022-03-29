import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets the number of remaining days until the end of the current year
 * @returns Number of remaining days until the end of the current year
 */
export function getRemainingDaysThisYear(): number {
  const now = Temporal.Now.plainDateISO();
  const nextNewYear = now.add({ years: 1 }).with({ month: 1, day: 1 }).subtract({ days: 1 });
  return nextNewYear.dayOfYear - now.dayOfYear;
}
