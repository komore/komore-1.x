import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a temporal that occurs at the end the month, given another temporal
 * @param temporal Temporal
 * @returns Temporal occuring at the end of the same month
 */
export function dateToEndOfMonth<T extends TemporalWithDate | Temporal.PlainMonthDay>(temporal: T): T {
  if (temporal instanceof Temporal.PlainMonthDay) {
    const temporalDate = asPlainDate(temporal);
    return temporalDate.add({ months: 1 }).with({ day: 1 }).subtract({ days: 1 }).toPlainMonthDay() as T;
  } else {
    return temporal.add({ months: 1 }).with({ day: 1 }).subtract({ days: 1 }) as T;
  }
}
