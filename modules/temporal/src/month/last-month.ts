import { type Month } from './month';

/**
 * Return the last month
 *
 * @returns Last month
 */
export function lastMonth(): Month {
  const now = Temporal.Now.plainDateISO();
  const lastMonth = now.subtract({ months: 1 });
  return lastMonth.month as Month;
}
