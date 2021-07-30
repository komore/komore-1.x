import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a temporal that occurs at the start of the same week
 * @param temporal Temporal
 * @returns Temporal that occurs at the start of the same week as `temporal`
 */
export function toStartOfWeek<T extends TemporalWithDate>(temporal: T): T {
  return temporal.subtract({ days: temporal.dayOfWeek - 1 }) as T;
}
