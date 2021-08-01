import type { TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Creates a function that tests whether a temporal with date and time occurs later than a reference temporal with date and time
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal with date and time occurs later than the reference temporal with date and time
 */
export function isLaterThan(referenceTemporal: TemporalWithDateTime): (temporal: TemporalWithDateTime) => boolean {
  return temporal => temporal.until(referenceTemporal).sign < 0;
}
