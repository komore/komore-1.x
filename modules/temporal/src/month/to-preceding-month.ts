import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';
import { withTemporalWithDate } from '../with-temporal-with-date';
import { Month } from './month';

/**
 * Returns a temporal that occurs during the previous month
 * @param temporal Temporal
 * @returns Temporal that occurs during the previous month
 * @template T Temporal type
 */
export function toPrecedingMonth<T extends TemporalWithDate | TemporalWithPartialDate>(temporal: T): T;

/**
 * Returns the previous month
 * @param month Month
 * @returns Month before `month`
 */
export function toPrecedingMonth(month: Month): Month;

export function toPrecedingMonth(
  temporalOrMonth: TemporalWithDate | TemporalWithPartialDate | Month
): TemporalWithDate | TemporalWithPartialDate | Month {
  if (typeof temporalOrMonth === 'number') {
    const month = temporalOrMonth;
    return month === Month.JANUARY ? Month.DECEMBER : month - 1;
  } else {
    const temporal = temporalOrMonth;
    return withTemporalWithDate(temporal, t => t.add({ months: 1 }));
  }
}
