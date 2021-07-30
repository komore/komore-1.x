import type { Instant } from '../instant';
import { fromTemporalDuration } from './from-temporal-duration';
import type { Duration } from './duration';

/**
 * Gets a difference in milliseconds
 * @param from Instant from which to start
 * @param until Instant until which to count
 * @returns Difference in milliseconds
 */
export function getDifferenceInMilliseconds(from: Instant, until: Instant): Duration {
  const td = from._.until(until._, { largestUnit: 'milliseconds' });
  return fromTemporalDuration(td);
}
