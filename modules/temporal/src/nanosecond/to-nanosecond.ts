import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Returns the nanosecond from a temporal with time
 * @param temporal Temporal with time
 * @returns Nanosecond
 */
export function toNanosecond(temporal: TemporalWithTime): number {
  return temporal.nanosecond;
}
