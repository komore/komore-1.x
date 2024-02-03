import { nowFor } from '../now-for';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs this week
 *
 * @param temporal Temporal
 * @returns true if the temporal occurs this week
 */
export function isThisWeek(temporal: TemporalWithDate): boolean {
  const now = nowFor(temporal);
  return temporal.year === now.year && temporal.weekOfYear === now.weekOfYear;
}
