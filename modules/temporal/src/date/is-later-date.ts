import { asPlainDate } from '../as-plain-date';
import type { TemporalWithDate } from '../temporal-with-date';
import type { TemporalWithPartialDate } from '../temporal-with-partial-date';

/**
 * Tests whether a temporal occurs at a later date than another temporal
 * @param laterDate Later date
 * @param referenceTemporal Reference temporal
 * @returns true if `laterDate` occurs at a later date than `referenceTemporal`
 */
export function isLaterDate(
  laterDate: TemporalWithDate | TemporalWithPartialDate,
  referenceTemporal: TemporalWithDate | TemporalWithPartialDate
): boolean {
  const laterPlainDate = asPlainDate(laterDate);
  const referencePlainDate = asPlainDate(referenceTemporal);
  return laterPlainDate.until(referencePlainDate).sign < 0;
}
