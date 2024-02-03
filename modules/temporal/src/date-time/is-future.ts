import { nowFor } from '../now-for';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';
import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether a temporal with date and time occurs in the future
 *
 * @param temporal Temporal
 * @returns true if the temporal occurs in the future
 */
export function isFuture(temporal: TemporalWithDate | TemporalWithTime | TemporalWithPartialDate): boolean {
  if (temporal instanceof Temporal.PlainMonthDay || temporal instanceof Temporal.PlainYearMonth) {
    const now = Temporal.Now.plainDateISO();
    const temporalAsPlainDate =
      temporal instanceof Temporal.PlainMonthDay
        ? temporal.toPlainDate({ year: now.year })
        : temporal.toPlainDate({ day: now.day });
    return now.until(temporalAsPlainDate).sign > 0;
  } else {
    const now = nowFor(temporal);
    return (now as Temporal.PlainDateTime).until(temporal).sign > 0;
  }
}
