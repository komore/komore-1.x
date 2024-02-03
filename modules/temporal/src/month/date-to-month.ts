import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';
import { type Month } from './month';

/**
 * Returns the month from a temporal
 *
 * @param temporal Temporal
 * @returns Month
 */
export function dateToMonth(temporal: TemporalWithDate | TemporalWithPartialDate): Month {
  if (temporal instanceof Temporal.PlainMonthDay) {
    const plainDate = asPlainDate(temporal);
    return plainDate.month;
  }

  return temporal.month;
}
