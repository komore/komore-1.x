import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns the next year
 * @returns Next year
 */
export function getNextYear(): number {
  const now = Temporal.Now.plainDateISO();
  return now.year + 1;
}
