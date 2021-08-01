import type { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Creates a function that adds years to a temporal
 * @param years Number of years to add
 * @returns Function that adds years to a temporal
 */
export function addYears(years: number): <T extends TemporalWithDate | Temporal.PlainYearMonth>(temporal: T) => T {
  return <T extends TemporalWithDate | Temporal.PlainYearMonth>(temporal: T) => temporal.add({ years }) as T;
}
