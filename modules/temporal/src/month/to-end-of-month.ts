import type { Temporal } from 'proposal-temporal';
import { withTemporalWithDate } from '../internal/with-temporal-with-date';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Returns the end of the month for a given temporal
 * @param temporal Temporal
 * @returns End of the month
 */
export function toEndOfMonth<T extends TemporalWithDate | Temporal.PlainMonthDay>(temporal: T): T {
  return withTemporalWithDate(temporal, t => t.add({ months: 1 }).with({ day: 1 }).subtract({ days: 1 }));
}
