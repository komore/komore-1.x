import type { Temporal } from 'proposal-temporal';
import type { TemporalWithDate } from '../temporal-with-date';
import { withTemporalWithDate } from '../with-temporal-with-date';

/**
 * Subtracts days from a temporal
 * @param temporal Temporal
 * @param days Number of days to subtract
 * @returns Temporal with the subtracted days
 * @template T Temporal type
 */
export function subtractDays<T extends TemporalWithDate | Temporal.PlainMonthDay>(temporal: T, days: number): T {
  return withTemporalWithDate(temporal, t => t.subtract({ days }));
}
