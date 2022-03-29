import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Returns the microsecond from a temporal with time
 * @param temporal Temporal with time
 * @returns Microsecond
 */
export function timeToMicrosecond(temporal: TemporalWithTime): number {
  return temporal.microsecond;
}
