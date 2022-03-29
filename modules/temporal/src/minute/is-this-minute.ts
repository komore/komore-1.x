import { getNowFor } from '../get-now-for';
import { type TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Tests whether a temporal occurs this minute
 * @param temporal Temporal
 * @returns true if the temporal occurs this minute
 */
export function isThisMinute(temporal: TemporalWithDateTime): boolean {
  const now = getNowFor(temporal);
  return (
    temporal.year === now.year &&
    temporal.dayOfYear === now.dayOfYear &&
    temporal.hour === now.hour &&
    temporal.minute === now.minute
  );
}
