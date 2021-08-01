import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets the number of remaining days for the current month
 * @returns Number of remaining days for the current month
 */
export function getRemainingDaysThisMonth(): number {
  const now = Temporal.now.plainDateISO();
  const endOfMonth = now
    .add({ months: 1 })
    .with({ day: 1 })
    .subtract({ days: 1 });
  return now.until(endOfMonth, { largestUnit: 'days'}).days;
}
