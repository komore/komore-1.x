import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Returns the minute from a temporal with time
 * @param temporal Temporal with time
 * @returns Minutes
 */
export function toMinute(temporal: TemporalWithTime): number {
  return temporal.minute;
}
