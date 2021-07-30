import { getNowFor } from '@komore/temporal';
import type { Temporal } from 'proposal-temporal';
import { asTemporalWithDate } from '../internal/as-temporal-with-date';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Returns the number of remaining days in a given month
 * @param temporal Temporal
 * @returns Number of remaining days
 */
export function toRemainingDaysInMonth(temporal: TemporalWithDate | Temporal.PlainMonthDay): number {
  const endOfMonth = asTemporalWithDate(temporal).add({ months: 1 }).with({ day: 1 }).subtract({ days: 1 });
  const now = getNowFor(endOfMonth);
  return now.until(endOfMonth, { largestUnit: 'days' }).days;
}
