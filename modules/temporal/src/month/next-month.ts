import { type Month } from './month';

/**
 * Returns the next month
 *
 * @returns Next month
 */
export function nextMonth(): Month {
  const now = Temporal.Now.plainDateISO();
  const nextMonth = now.add({ months: 1 });
  return nextMonth.month as Month;
}
