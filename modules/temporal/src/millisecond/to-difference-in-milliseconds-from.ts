import { asPlainTime } from '../as-plain-time';
import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Returns a function that computes the difference between a reference temporal and a temporal, in milliseconds
 * @param referenceTemporal Reference temporal
 * @returns Function that computes the difference between the reference temporal and a temporal, in milliseconds
 */
export function toDifferenceInMillisecondsFrom(
  referenceTemporal: TemporalWithTime
): (temporal: TemporalWithTime) => number {
  return temporal => referenceTemporal.until(asPlainTime(temporal), { largestUnit: 'millisecond' }).milliseconds;
}
