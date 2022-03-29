import { Temporal } from '@js-temporal/polyfill';
import { getNowFor } from '../get-now-for';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';

/**
 * Tests whether a temporal occurs this month
 * @param temporal Temporal
 * @returns true if the temporal occurs this month
 */
export function isThisMonth(temporal: TemporalWithDate | TemporalWithPartialDate): boolean {
  if (temporal instanceof Temporal.PlainMonthDay) {
    const now = getNowFor(temporal);
    return temporal.monthCode === now.monthCode;
  } else {
    const now = getNowFor(temporal);
    return temporal.year === now.year && temporal.month === now.month;
  }
}
