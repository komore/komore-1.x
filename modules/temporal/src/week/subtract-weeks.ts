import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Creates a function that subtracts weeks from a temporal with date
 * @param weeks Number of weeks to subtract
 * @returns Function that subtracts `weeks` weeks from a temporal with date
 */
export function subtractWeeks(weeks: number): <T extends TemporalWithDate>(temporal: T) => T {
  return <T extends TemporalWithDate>(temporal: T) => temporal.subtract({ weeks }) as T;
}
