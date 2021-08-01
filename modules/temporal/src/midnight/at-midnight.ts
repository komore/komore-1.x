import type { TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Creates a temporal that is set at midnight for the given day
 *
 * Note: in practice, this means the date changes to the next day
 * @param temporal Temporal with date and time
 * @returns Temporal set at midnight
 */
export function atMidnight<T extends TemporalWithDateTime>(temporal: T): T {
  return temporal
    .with({ hour: 0, minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 })
    .add({ days: 1 }) as T;
}
