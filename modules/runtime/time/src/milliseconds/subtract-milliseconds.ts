import { cloneTemporal } from '../clone-temporal';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Subtracts milliseconds from a temporal with time
 * @param temporal Temporal
 * @param milliseconds Number of milliseconds to subtract
 * @returns Temporal with the subtracted milliseconds
 * @template T Temporal type
 */
export function subtractMilliseconds<T extends TemporalWithTime>(temporal: T, milliseconds: number): T {
  const ts = temporal._.getTime() - milliseconds;
  return cloneTemporal(temporal, new Date(ts));
}
