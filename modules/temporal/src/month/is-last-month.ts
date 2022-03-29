import { Temporal } from '@js-temporal/polyfill';
import { asPlainDate } from '../as-plain-date';
import { getNowFor } from '../get-now-for';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';
import { type Month } from './month';

/**
 * Tests whether a temporal or month occurs during the last month
 * @param temporal Temporal or month
 * @returns true if the temporal or month occurs during the last month
 */
export function isLastMonth(temporal: TemporalWithDate | TemporalWithPartialDate | Month): boolean {
  if (typeof temporal === 'number') {
    const now = Temporal.Now.plainDateISO();
    const lastMonth = now.subtract({ months: 1 });
    return temporal === lastMonth.month;
  } else {
    const t = temporal instanceof Temporal.PlainMonthDay ? asPlainDate(temporal) : temporal;
    const now = getNowFor(t);
    const lastMonth = now.subtract({ months: 1 });
    return t.year === lastMonth.year && t.month === lastMonth.month;
  }
}
