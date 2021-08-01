import { Temporal } from '@js-temporal/polyfill';
import type { Month } from './month';

/**
 * Gets the next month
 * @returns Next month
 */
export function getNextMonth(): Month {
  const now = Temporal.now.plainDateISO();
  return now.month;
}
