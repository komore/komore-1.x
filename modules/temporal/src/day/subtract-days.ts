import type { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate } from '../temporal-with-date';
import { withTemporalWithDate } from '../with-temporal-with-date';

/**
 * Creates a function that subtracts days from a temporal
 * @param days Number of days to subtract
 * @returns Function that subtracts days from a temporal
 */
export function subtractDays(days: number): <T extends TemporalWithDate | Temporal.PlainMonthDay>(temporal: T) => T {
  return temporal => withTemporalWithDate(temporal, t => t.subtract({ days }));
}
