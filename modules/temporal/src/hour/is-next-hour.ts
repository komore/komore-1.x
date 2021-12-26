import { Temporal } from '@js-temporal/polyfill';
import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether a temporal occurs during the next hour
 * @param instant Instant with time
 * @returns true if the instant occurs during the next hour
 */
export function isNextHour(temporal: TemporalWithTime): boolean {
  const now = Temporal.Now.plainTimeISO();
  return now.hour === temporal.hour - 1;
}
