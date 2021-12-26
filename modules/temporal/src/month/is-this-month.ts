import { getNowFor } from '@komore/temporal';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs this month
 * @param temporal Temporal
 * @returns true if the temporal occurs this month
 */
export function isThisMonth(temporal: TemporalWithDate): boolean {
  const now = getNowFor(temporal);
  return temporal.year === now.year && temporal.month === now.month;
}
