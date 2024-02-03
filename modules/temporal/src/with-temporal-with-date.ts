import { asTemporalWithDate } from './as-temporal-with-date';
import { type TemporalWithDate } from './temporal-with-date';
import { type TemporalWithPartialDate } from './temporal-with-partial-date';

/**
 * Performs an operation with a temporal with date, converting types with a partial date back and forth if necessary
 * @param temporal Temporal with a date or a partial date
 * @param predicate Predicate that returns a new plain date
 * @returns Updated temporal with date or partial date
 * @template T Temporal with date or partial date type
 * @private
 */
export function withTemporalWithDate<T extends TemporalWithDate | TemporalWithPartialDate>(
  temporal: T,
  predicate: (temporalWithDate: TemporalWithDate) => TemporalWithDate
): T {
  if (temporal instanceof Temporal.PlainYearMonth) {
    const plainDate = asTemporalWithDate(temporal);
    const mutatedPlainDate = predicate(plainDate);
    return mutatedPlainDate.toPlainYearMonth() as T;
  } else if (temporal instanceof Temporal.PlainMonthDay) {
    const plainDate = asTemporalWithDate(temporal);
    const mutatedPlainDate = predicate(plainDate);
    return mutatedPlainDate.toPlainMonthDay() as T;
  } else {
    return predicate(temporal) as T;
  }
}
