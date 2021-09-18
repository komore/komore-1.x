import type { TemporalWithDate } from '../temporal-with-date';
import { isWeekEnd } from './is-week-end';

/**
 * Creates a function that tests whether a temporal occurs on the same week-end as a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs on the same week-end as the reference temporal
 */
export function isSameWeekEnd(referenceTemporal: TemporalWithDate): (temporal: TemporalWithDate) => boolean {
  const referenceYear = referenceTemporal.year;
  const referenceWeekOfYear = referenceTemporal.weekOfYear;
  const isReferenceWeekEnd = isWeekEnd(referenceTemporal);
  return temporal =>
    isReferenceWeekEnd &&
    isWeekEnd(temporal) &&
    referenceYear === temporal.year &&
    referenceWeekOfYear === temporal.weekOfYear;
}
