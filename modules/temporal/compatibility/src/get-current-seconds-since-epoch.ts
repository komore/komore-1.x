import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets the current number of seconds since Epoch
 * @returns Number of seconds
 */
export function getCurrentSecondsSinceEpoch(): number {
  return Temporal.now.instant().epochSeconds;
}
