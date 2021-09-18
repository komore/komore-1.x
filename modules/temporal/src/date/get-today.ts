import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets today as a plain date
 * @returns Today as a plain date
 */
export function getToday(): Temporal.PlainDate {
  return Temporal.Now.plainDateISO();
}
