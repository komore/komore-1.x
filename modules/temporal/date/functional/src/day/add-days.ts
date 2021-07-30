import type { TemporalWithDate } from '@komore/temporal/date';
import { addDays as wrappedAddDays } from '@komore/temporal/date';
import type { Temporal } from '@js-temporal/polyfill';

/**
 * Adds days to a temporal
 * @param days Number of days to add
 * @returns Function that adds days to a temporal
 */
export function addDays(days: number): <T extends TemporalWithDate | Temporal.PlainMonthDay>(temporal: T) => T {
  return temporal => wrappedAddDays(temporal, days);
}
