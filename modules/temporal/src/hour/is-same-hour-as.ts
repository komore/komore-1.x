import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that tests whether a temporal occurs at the same hour as a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs at the same hour as the reference temporal
 */
export function isSameHourAs(referenceTemporal: TemporalWithTime): (temporal: TemporalWithTime) => boolean {
  return temporal => temporal.hour === referenceTemporal.hour;
}
