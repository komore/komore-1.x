import { cloneTemporal } from '../clone-temporal';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Subtracts minutes from a temporal with time
 * @param temporal Temporal
 * @param minutes Number of minutes to subtract
 * @returns Temporal with the subtracted minutes
 */
export function subtractMinutes<T extends TemporalWithTime>(temporal: T, minutes: number): T {
  return cloneTemporal(temporal, d => d.setMinutes(d.getMinutes() - minutes));
}
