import { type Month } from './month';

/**
 * Returns the current month
 *
 * @returns Current month
 */
export function thisMonth(): Month {
  const now = Temporal.Now.plainDateISO();
  return now.month as Month;
}
