import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Returns the hour from a temporal with time
 * @param temporal Temporal with time
 * @returns Hour
 */
export function toHour(temporal: TemporalWithTime): number {
  return temporal.hour;
}
