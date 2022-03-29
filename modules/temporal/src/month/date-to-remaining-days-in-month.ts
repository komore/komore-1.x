import { type Temporal } from '@js-temporal/polyfill';
import { asTemporalWithDate } from '../as-temporal-with-date';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns the number of remaining days in a given month
 * @param temporal Temporal
 * @returns Number of remaining days
 */
export function dateToRemainingDaysInMonth(temporal: TemporalWithDate | Temporal.PlainMonthDay): number {
  const temporalDate = asTemporalWithDate(temporal);
  const endOfMonth = temporalDate.add({ months: 1 }).with({ day: 1 }).subtract({ days: 1 });
  return endOfMonth.day - temporalDate.day;
}
