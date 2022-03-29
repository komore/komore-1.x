import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Returns the second from a temporal with time
 * @param temporal Temporal with time
 * @returns Second
 */
export function timeToSecond(temporal: TemporalWithTime): number {
  return temporal.second;
}
