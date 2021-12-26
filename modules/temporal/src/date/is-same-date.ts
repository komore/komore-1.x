import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';

/**
 * Tests whether two temporals occur on the same date
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if both temporals occur on the same date
 */
export function isSameDate(
  lhs: TemporalWithDate | TemporalWithPartialDate,
  rhs: TemporalWithDate | TemporalWithPartialDate
): boolean {
  const lhsDate = asPlainDate(lhs);
  const rhsDate = asPlainDate(rhs);
  return lhsDate.until(rhsDate).sign === 0;
}
