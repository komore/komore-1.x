import { asPlainTime } from '../as-plain-time';
import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether an instant occurs during an hour that is earlier than the hour another instant occurs
 * @param lhs Left-hand instant
 * @param rhs Right-hand instant
 * @returns true if `lhs` occurs during an hour that is earlier than the hour during which `rhs` occurs
 */
export function isEarlierHourThan(lhs: TemporalWithTime, rhs: TemporalWithTime): boolean {
  const lhsPt = asPlainTime(lhs);
  const rhsPt = asPlainTime(rhs);
  return lhsPt.hour < rhsPt.hour;
}
