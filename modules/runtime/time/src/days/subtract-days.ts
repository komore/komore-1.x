import { cloneTemporal } from '../clone-temporal';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Adds days to a temporal with date
 * @param temporal Temporal
 * @param days Number of days to subtract
 * @returns Temporal with the subtracted days
 */
export function subtractDays<T extends TemporalWithDate>(temporal: T, days: number): T {
  return cloneTemporal(temporal, d => {
    d.setDate(d.getDate() - days);
    return d;
  });
}
