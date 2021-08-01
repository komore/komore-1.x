import { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether an instant occurs during the next hour
 * @param instant Instant with time
 * @returns true if the instant occurs during the next hour
 */
export function isNextHour(temporal: TemporalWithTime): boolean {
  const now = Temporal.now.plainTimeISO();
  return now.hour === temporal.hour - 1;
}
