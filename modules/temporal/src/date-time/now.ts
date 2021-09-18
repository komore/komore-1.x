import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns now as a plain date time
 * @returns Now as a plain date time
 */
export function now(): Temporal.PlainDateTime {
  return Temporal.Now.plainDateTimeISO();
}
