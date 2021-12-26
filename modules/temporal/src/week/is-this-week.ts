import { getNowFor } from '@komore/temporal';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs this week
 * @param temporal Temporal
 * @returns true if the temporal occurs this week
 */
export function isThisWeek(temporal: TemporalWithDate): boolean {
  const now = getNowFor(temporal);
  return temporal.year === now.year && temporal.weekOfYear === now.weekOfYear;
}
