import type { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate } from '../temporal-with-date';
import { withTemporalWithDate } from '../with-temporal-with-date';

/**
 * Returns the end of the month for a given temporal
 * @param temporal Temporal
 * @returns End of the month
 */
export function toEndOfMonth<T extends TemporalWithDate | Temporal.PlainMonthDay>(temporal: T): T {
  return withTemporalWithDate(temporal, t => t.add({ months: 1 }).with({ day: 1 }).subtract({ days: 1 }));
}
