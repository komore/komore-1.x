import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether a temporal with time occurs at midnight
 * @param temporal Temporal with time
 * @returns true if the temporal occurs at midnight
 */
export function isMidnight(temporal: TemporalWithTime): boolean {
  const { hour, minute, second, millisecond, microsecond, nanosecond } = temporal;
  return hour + minute + second + millisecond + microsecond + nanosecond === 0;
}
