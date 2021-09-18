import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets the current number of nanoseconds since Epoch
 * @returns Number of nanoseconds
 */
export function getCurrentNanosecondsSinceEpoch(): bigint {
  return Temporal.Now.instant().epochNanoseconds;
}
