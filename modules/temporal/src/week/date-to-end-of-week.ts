import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a temporal that occurs at the end of the same week
 * @param temporal Temporal
 * @returns Temporal that occurs at the end of the same week as `temporal`
 */
export function dateToEndOfWeek<T extends TemporalWithDate>(temporal: T): T {
  if (temporal.dayOfWeek === 7) {
    return temporal;
  }

  return temporal.add({ days: 7 - temporal.dayOfWeek }) as T;
}
