import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a temporal that occurs on the last day of another temporal's year
 *
 * @param temporal Temporal
 * @returns Temporal that occurs on the last day the other temporal's year
 */
export function dateToStartOfYear<T extends TemporalWithDate | Temporal.PlainYearMonth | Temporal.PlainMonthDay>(
  temporal: T
): T {
  if (temporal instanceof Temporal.PlainMonthDay) {
    return Temporal.PlainMonthDay.from('01-01') as T;
  } else if (temporal instanceof Temporal.PlainYearMonth) {
    return temporal.with({ month: 1 }) as T;
  } else {
    return (temporal as TemporalWithDate).with({ month: 1, day: 1 }) as T;
  }
}
