import { cloneTemporal } from '../../clone-temporal';
import type { TemporalWithTime } from '../../time/temporal-with-time';

/**
 * Gets a temporal representing the start of the day
 * @param temporal Temporal
 * @returns Temporal at the start of the day
 * @template T Temporal with time type
 */
export function getStartOfDay<T extends TemporalWithTime>(temporal: T): T {
  return cloneTemporal(temporal, d => d.setHours(0, 0, 0, 0));
}
