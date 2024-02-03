import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Creates a function that subtracts years from a temporal
 *
 * @param years Number of years to subtract
 * @returns Function that subtracts `years` years from a temporal
 */
export function subtractYears(years: number): <T extends TemporalWithDate | Temporal.PlainYearMonth>(temporal: T) => T {
  return <T extends TemporalWithDate | Temporal.PlainYearMonth>(temporal: T) => temporal.subtract({ years }) as T;
}
