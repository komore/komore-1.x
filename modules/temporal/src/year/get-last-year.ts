import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns the last year
 * @returns Last year
 */
export function getLastYear(): number {
  const now = Temporal.Now.plainDateISO();
  return now.year - 1;
}
