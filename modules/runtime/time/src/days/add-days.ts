import { cloneTemporal } from '../clone-temporal';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Adds days to a temporal with date
 * @param temporal Temporal
 * @param days Number of days to add
 * @returns Temporal with the added days
 */
export function addDays<T extends TemporalWithDate>(temporal: T, days: number): T {
  return cloneTemporal(temporal, d => {
    d.setDate(d.getDate() + days);
    return d;
  });
}
