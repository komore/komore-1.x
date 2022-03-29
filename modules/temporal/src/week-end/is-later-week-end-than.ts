import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Creates a function that tests whether a temporal occurs on a week-end later than a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs on a week-end later than the reference temporal
 */
export function isLaterWeekEndThan(_referenceTemporal: TemporalWithDate): (temporal: TemporalWithDate) => boolean {
  // TODO: implement
  return _temporal => false;
}
