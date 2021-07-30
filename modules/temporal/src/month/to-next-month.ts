import type { TemporalWithDate } from '../temporal-with-date';
import type { TemporalWithPartialDate } from '../temporal-with-partial-date';
import { withTemporalWithDate } from '../with-temporal-with-date';
import { Month } from './month';

/**
 * Returns a temporal that occurs during the next month
 * @param temporal Temporal
 * @returns Temporal that occurs during the next month
 * @template T Temporal type
 */
export function toNextMonth<T extends TemporalWithDate | TemporalWithPartialDate>(temporal: T): T;

/**
 * Returns the next month
 * @param month Month
 * @returns Month after `month`
 */
export function toNextMonth(month: Month): Month;

export function toNextMonth(
  temporalOrMonth: TemporalWithDate | TemporalWithPartialDate | Month
): TemporalWithDate | TemporalWithPartialDate | Month {
  if (typeof temporalOrMonth === 'number') {
    const month = temporalOrMonth;
    return month === Month.DECEMBER ? Month.JANUARY : month + 1;
  } else {
    const temporal = temporalOrMonth;
    return withTemporalWithDate(temporal, t => t.add({ months: 1 }));
  }
}
