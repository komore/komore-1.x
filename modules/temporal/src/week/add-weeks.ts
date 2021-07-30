import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Creates a function that adds weeks to a temporal with date
 * @param weeks Number of weeks to add
 * @returns Function that adds `weeks` weeks to a temporal with date
 */
export function addWeeks(weeks: number): <T extends TemporalWithDate>(temporal: T) => T {
  return <T extends TemporalWithDate>(temporal: T) => temporal.add({ weeks }) as T;
}
