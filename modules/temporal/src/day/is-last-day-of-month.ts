import { feature } from '@komore/testing';

import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs on the last day of the month
 *
 * @param temporal Temporal
 * @returns true if the temporal occurs on the last day of the month
 */
export function isLastDayOfMonth(temporal: TemporalWithDate | Temporal.PlainMonthDay): boolean {
  if (temporal instanceof Temporal.PlainMonthDay) {
    const temporalPlainDate = asPlainDate(temporal);
    return temporalPlainDate.add({ days: 1 }).month !== temporalPlainDate.month;
  } else {
    return temporal.add({ days: 1 }).month !== temporal.month;
  }
}
