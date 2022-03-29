import { Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from './temporal-with-date';
import { type TemporalWithPartialDate } from './temporal-with-partial-date';

/**
 * Converts a temporal with date, converting the type of a temporal with a partial date if necessary
 * @param temporal Temporal with a date or a partial date
 * @returns Plain date
 * @private
 */
export function asPlainDate(temporal: TemporalWithDate | TemporalWithPartialDate): Temporal.PlainDate {
  if (temporal instanceof Temporal.PlainDate) {
    return temporal;
  } else if (temporal instanceof Temporal.PlainYearMonth) {
    return temporal.toPlainDate({ day: 1 });
  } else if (temporal instanceof Temporal.PlainMonthDay) {
    return temporal.toPlainDate({ year: 2021 }); // non-leap year
  } else {
    return temporal.toPlainDate();
  }
}
