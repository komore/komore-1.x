import { cloneTemporal } from '../../clone-temporal';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Adds minutes to a temporal with time
 * @param temporal Temporal
 * @param minutes Number of minutes to add
 * @returns Temporal with the added minutes
 */
export function addMinutes<T extends TemporalWithTime>(temporal: T, minutes: number): T {
  return cloneTemporal(temporal, d => d.setMinutes(d.getMinutes() + minutes));
}
