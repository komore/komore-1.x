import type { TemporalWithDate } from '../temporal-with-date';
import { isWeekEnd } from './is-week-end';

/**
 * Tests whether two temporal occur during the same week-end
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if `lhs` and `rhs` occur during the same week-end
 */
export function isSameWeekEnd(lhs: TemporalWithDate, rhs: TemporalWithDate): boolean {
  return lhs.year === rhs.year && lhs.weekOfYear === rhs.weekOfYear && isWeekEnd(lhs) && isWeekEnd(rhs);
}
