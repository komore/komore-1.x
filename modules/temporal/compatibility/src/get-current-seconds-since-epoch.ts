import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns the current number of seconds since Epoch
 *
 * @returns Number of seconds
 */
export function getCurrentSecondsSinceEpoch(): number {
  return Temporal.Now.instant().epochSeconds;
}
