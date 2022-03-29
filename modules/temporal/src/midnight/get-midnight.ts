import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets midnight as a plain time
 * @returns Midnight
 */
export function getMidnight(): Temporal.PlainTime {
  return Temporal.PlainTime.from('00:00');
}
