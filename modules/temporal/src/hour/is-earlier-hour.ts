import type { InstantWithTime } from '../instant-with-time';

/**
 * Tests whether an instant occurs during an hour that is earlier than the hour another instant occurs
 * @param lhs Left-hand instant
 * @param rhs Right-hand instant
 * @returns true if `lhs` occurs during an hour that is earlier than the hour during which `rhs` occurs
 */
export function isEarlierHour(lhs: InstantWithTime, rhs: InstantWithTime): boolean {
  const lhsPt = lhs._.toPlainTime();
  const rhsPt = rhs._.toPlainTime();
  return lhsPt.hour < rhsPt.hour;
}
