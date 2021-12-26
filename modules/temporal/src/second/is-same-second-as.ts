import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that tests wether a temporal with time occurs at the same second as a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal with time occurs at the same second as the reference temporal
 */
export function isSameSecondAs(referenceTemporal: TemporalWithTime): (temporal: TemporalWithTime) => boolean {
  return temporal => temporal.second === referenceTemporal.second;
}
