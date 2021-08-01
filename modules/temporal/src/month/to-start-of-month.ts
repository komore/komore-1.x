import type { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate } from '../temporal-with-date';
import { withTemporalWithDate } from '../with-temporal-with-date';

/**
 * Returns the start of the month for a given temporal
 * @param temporal Temporal
 * @returns Start of the month
 */
export function toStartOfMonth<T extends TemporalWithDate | Temporal.PlainMonthDay>(temporal: T): T {
  return withTemporalWithDate(temporal, t => t.with({ day: 1 }));
}
