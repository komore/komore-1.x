import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';
import { withTemporalWithDate } from '../with-temporal-with-date';

/**
 * Creates a function that adds days to a temporal
 * @param days Number of days to add
 * @returns Function that adds `days` days to a temporal
 */
export function addDays(days: number): <T extends TemporalWithDate | Temporal.PlainMonthDay>(temporal: T) => T {
  return temporal => withTemporalWithDate(temporal, t => t.add({ days }));
}
