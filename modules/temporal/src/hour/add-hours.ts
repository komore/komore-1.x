import { cloneTemporal } from '@komore/temporal';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Adds hours to a temporal with time
 * @param temporal Temporal
 * @param hours Number of hours to add
 * @returns Temproal with the added hours
 * @template T Temporal with time type
 */
export function addHours<T extends TemporalWithTime>(temporal: T, hours: number): T {
  return cloneTemporal(temporal, zdt => zdt.add({ hours }));
}
