import type { Temporal } from 'proposal-temporal';
import { asPlainDate } from '../as-plain-date';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs on a different, earlier day than another temporal
 * @param earlierTemporal Temporal that may occur on an earlier day
 * @param referenceTemporal Temporal reference point
 * @returns true if `earlierTemporal` occurs on a different, earlier day than `referenceTemporal`
 */
export function isEarlierDay(
  earlierTemporal: TemporalWithDate | Temporal.PlainMonthDay,
  referenceTemporal: TemporalWithDate | Temporal.PlainMonthDay
): boolean {
  const earlierPlainDate = asPlainDate(earlierTemporal);
  const referencePlainDate = asPlainDate(referenceTemporal);
  const yearDifference = earlierPlainDate.year - referencePlainDate.year;
  return yearDifference < 0 || (yearDifference === 0 && earlierPlainDate.dayOfYear < referencePlainDate.dayOfYear);
}
