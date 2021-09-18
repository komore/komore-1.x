import { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Tests whether a temporal with date and time occurs in the future
 * @param temporal Temporal with date and time
 * @returns true if the temporal occurs in the future
 */
export function isFuture(temporal: TemporalWithDateTime): boolean {
  const now = Temporal.Now.plainDateTimeISO();
  return now.until(temporal).sign > 0;
}
