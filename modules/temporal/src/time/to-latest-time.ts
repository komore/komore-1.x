import { asPlainTime } from '../as-plain-time';
import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Returns the temporal with the latest time
 * @param lhs Left hand side
 * @param rhs Right hand side
 * @returns Latest time
 */
export function toLatestTime<T extends TemporalWithTime>(lhs: T, rhs: T): T {
  const lhsPt = asPlainTime(lhs);
  const rhsPt = asPlainTime(rhs);
  const duration = lhsPt.until(rhsPt);
  return duration.sign <= 0 ? lhs : rhs;
}
