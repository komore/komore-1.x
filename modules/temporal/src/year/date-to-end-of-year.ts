import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a temporal that occurs on the last day of another temporal's year
 *
 * @param temporal Temporal
 * @returns Temporal that occurs on the last day the other temporal's year
 */
export function dateToEndOfYear<T extends TemporalWithDate | Temporal.PlainYearMonth | Temporal.PlainMonthDay>(
  temporal: T
): T {
  if (temporal instanceof Temporal.PlainMonthDay) {
    return Temporal.PlainMonthDay.from('12-31') as T;
  }
  if (temporal instanceof Temporal.PlainYearMonth) {
    return temporal.with({ month: 12 }) as T;
  } else {
    return (temporal as TemporalWithDate).with({ month: 12, day: 31 }) as T;
  }
}
