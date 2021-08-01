import type { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate } from '../temporal-with-date';
import { isEarlierDay } from './is-earlier-day';

/**
 * Creates a function that tests whether a temporal occurs on a different, earlier day than another temporal
 * @param referenceTemporal Temporal reference point
 * @returns Function that returns true if `earlierTemporal` occurs on a different, earlier day than `referenceTemporal`
 */
export function isEarlierDayThan(
  referenceTemporal: TemporalWithDate | Temporal.PlainMonthDay
): (earlierTemporal: TemporalWithDate | Temporal.PlainMonthDay) => boolean {
  return earlierTemporal => isEarlierDay(earlierTemporal, referenceTemporal);
}
