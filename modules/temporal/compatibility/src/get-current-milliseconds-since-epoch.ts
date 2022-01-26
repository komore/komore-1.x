import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets the current number of milliseconds since Epoch
 * @returns Number of milliseconds
 */
export function getCurrentMillisecondsSinceEpoch(): number {
  return Temporal.Now.instant().epochMilliseconds;
}
