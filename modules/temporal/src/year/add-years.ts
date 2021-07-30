import type { Temporal } from 'proposal-temporal';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Adds years to a temporal
 * @param temporal Temporal
 * @param years Number of years to add
 * @returns Temporal with the added years
 * @template T Temporal type
 */
export function addYears<T extends TemporalWithDate | Temporal.PlainYearMonth>(temporal: T, years: number): T {
  return temporal.add({ years }) as T;
}
