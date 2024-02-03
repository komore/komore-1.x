import { asPlainDate } from './as-plain-date';
import { type TemporalWithDate } from './temporal-with-date';
import { type TemporalWithPartialDate } from './temporal-with-partial-date';

/**
 * Converts a temporal with date, converting the type of a temporal with a partial date if necessary
 *
 * @param temporal Temporal with a date or a partial date
 * @returns Temporal with date
 * @private
 */
export function asTemporalWithDate(temporal: TemporalWithDate | TemporalWithPartialDate): TemporalWithDate {
  return temporal instanceof Temporal.PlainYearMonth || temporal instanceof Temporal.PlainMonthDay
    ? asPlainDate(temporal)
    : temporal;
}
