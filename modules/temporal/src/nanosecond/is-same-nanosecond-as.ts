import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Returns a function that tests whether a temporal occurs during the same nanosecond as a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs during the same nanosecond as the reference temporal
 */
export function isSameNanosecondAs(referenceTemporal: TemporalWithTime): (temporal: TemporalWithTime) => boolean {
  return temporal => temporal.until(referenceTemporal, { largestUnit: 'nanosecond' }).nanoseconds === 0;
}
