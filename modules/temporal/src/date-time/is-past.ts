import { Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Tests whether a temporal with date and time occurs in the past
 * @param temporal Temporal with date and time
 * @returns true if the temporal occurs in the past
 */
export function isPast(temporal: TemporalWithDateTime): boolean {
  const now = Temporal.Now.plainDateTimeISO();
  return now.until(temporal).sign < 0;
}
