import { Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';

/**
 * Tests whether a temporal occurs during the next month
 * @returns true if the temporal occurs during the next month
 */
export function isNextMonth(temporal: TemporalWithDate | TemporalWithPartialDate): boolean {
  if (temporal instanceof Temporal.PlainMonthDay || temporal instanceof Temporal.PlainYearMonth) {
    throw new Error('TODO: isNextMonth partial');
  }

  const now = Temporal.Now.plainDateISO();
  const nextMonth = now.add({ months: 1 });
  const diff = nextMonth.until(, 'mon')
  return lastMonth.month;
}
