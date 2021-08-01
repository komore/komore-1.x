import type { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate } from '../temporal-with-date';
import { isLaterDay } from './is-later-day';

/**
 * Creates a function that tests whether a temporal occurs on a different, later day than another temporal
 * @param referenceTemporal Temporal reference point
 * @returns Function that returns true if `laterTemporal` occurs on a different, later day than `referenceTemporal`
 */
export function isLaterDayThan(
  referenceTemporal: TemporalWithDate | Temporal.PlainMonthDay
): (laterTemporal: TemporalWithDate | Temporal.PlainMonthDay) => boolean {
  return laterTemporal => isLaterDay(laterTemporal, referenceTemporal);
}
