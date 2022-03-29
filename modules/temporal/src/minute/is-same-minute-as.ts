import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that tests whether a temporal occurs at the same minute as a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs at the same minute as the reference temporal
 */
export function isSameMinuteAs(referenceTemporal: TemporalWithTime): (temporal: TemporalWithTime) => boolean {
  return temporal => temporal.minute === referenceTemporal.minute;
}
