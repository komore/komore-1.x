import { nowFor } from '../now-for';
import { type TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Tests whether a temporal occurs this hour
 * @param temporal Temporal
 * @returns true if the temporal occurs this hour
 */
export function isThisHour(temporal: TemporalWithDateTime): boolean {
  const now = nowFor(temporal);
  return temporal.year === now.year && temporal.dayOfYear === now.dayOfYear && temporal.hour === now.hour;
}
