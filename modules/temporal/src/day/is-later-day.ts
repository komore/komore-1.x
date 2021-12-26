import { type Temporal } from '@js-temporal/polyfill';
import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs on a different, later day than another temporal
 * @param laterTemporal Temporal that may occur on a later day
 * @param referenceTemporal Temporal reference point
 * @returns true if `laterTemporal` occurs on a different, later day than `referenceTemporal`
 */
export function isLaterDay(
  laterTemporal: TemporalWithDate | Temporal.PlainMonthDay,
  referenceTemporal: TemporalWithDate | Temporal.PlainMonthDay
): boolean {
  const laterPlainDate = asPlainDate(laterTemporal);
  const referencePlainDate = asPlainDate(referenceTemporal);
  const yearDifference = laterPlainDate.year - referencePlainDate.year;
  return yearDifference > 0 || (yearDifference === 0 && laterPlainDate.dayOfYear > referencePlainDate.dayOfYear);
}
