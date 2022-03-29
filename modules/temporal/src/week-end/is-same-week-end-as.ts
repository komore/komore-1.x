import { type TemporalWithDate } from '../temporal-with-date';
import { isSameWeekAs } from '../week/is-same-week-as';
import { isWeekEnd } from './is-week-end';

/**
 * Creates a function that tests whether a temporal occurs on the same week-end as a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs on the same week-end as the reference temporal
 */
export function isSameWeekEndAs(referenceTemporal: TemporalWithDate): (temporal: TemporalWithDate) => boolean {
  const isReferenceWeekEnd = isWeekEnd(referenceTemporal);
  if (!isReferenceWeekEnd) {
    return () => false;
  }

  const sameWeekAs = isSameWeekAs(referenceTemporal);
  return temporal => isWeekEnd(temporal) && sameWeekAs(temporal);
}
