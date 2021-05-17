import { cloneTemporal } from '../clone-temporal';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Adds milliseconds to a temporal with time
 * @param temporal Temporal
 * @param milliseconds Number of milliseconds to add
 * @returns Temporal with the added milliseconds
 * @template T Temporal type
 */
export function addMilliseconds<T extends TemporalWithTime>(temporal: T, milliseconds: number): T {
  const ts = temporal._.getTime() + milliseconds;
  return cloneTemporal(temporal, new Date(ts));
}
