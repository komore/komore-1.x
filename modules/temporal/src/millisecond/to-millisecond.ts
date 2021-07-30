import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Returns the millisecond from a temporal with time
 * @param temporal Temporal with time
 * @returns Millisecond
 */
export function toMillisecond(temporal: TemporalWithTime): number {
  return temporal.millisecond;
}
