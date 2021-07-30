import type { TemporalWithTime } from '../temporal-with-time';
import { addMinutes } from './add-minutes';

/**
 * Subtracts minutes from a temporal with time
 * @param temporal Temporal
 * @param minutes Number of minutes to subtract
 * @returns Temporal with the subtracted minutes
 */
export function subtractMinutes<T extends TemporalWithTime>(temporal: T, minutes: number): T {
  return addMinutes(temporal, -minutes);
}
