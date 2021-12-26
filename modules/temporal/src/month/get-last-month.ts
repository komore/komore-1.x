import { Temporal } from '@js-temporal/polyfill';
import { type Month } from './month';

/**
 * Gets the last month
 * @returns Last month
 */
export function getLastMonth(): Month {
  const now = Temporal.Now.plainDateISO();
  const lastMonth = now.subtract({ months: 1 });
  return lastMonth.month;
}
