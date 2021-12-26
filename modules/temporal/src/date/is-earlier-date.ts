import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';

/**
 * Tests whether a temporal occurs at an earlier date than another temporal
 * @param earlierDate Earlier date
 * @param referenceTemporal Reference temporal
 * @returns true if `earlierDate` occurs at an earlier date than `referenceTemporal`
 */
export function isEarlierDate(
  earlierDate: TemporalWithDate | TemporalWithPartialDate,
  referenceTemporal: TemporalWithDate | TemporalWithPartialDate
): boolean {
  const lhsPlainDate = asPlainDate(earlierDate);
  const rhsPlainDate = asPlainDate(referenceTemporal);
  return lhsPlainDate.until(rhsPlainDate).sign > 0;
}
