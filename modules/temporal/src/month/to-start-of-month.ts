import type { Temporal } from 'proposal-temporal';
import { withTemporalWithDate } from '../internal/with-temporal-with-date';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Returns the start of the month for a given temporal
 * @param temporal Temporal
 * @returns Start of the month
 */
export function toStartOfMonth<T extends TemporalWithDate | Temporal.PlainMonthDay>(temporal: T): T {
  return withTemporalWithDate(temporal, t => t.with({ day: 1 }));
}
