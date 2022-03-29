import { Temporal } from '@js-temporal/polyfill';
import { type Month } from './month';

/**
 * Gets the current month
 * @returns Current month
 */
export function getThisMonth(): Month {
  const now = Temporal.Now.plainDateISO();
  return now.month;
}
