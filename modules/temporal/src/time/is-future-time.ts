import { Temporal } from '@js-temporal/polyfill';
import { asPlainTime } from '../as-plain-time';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether a temporal with time occurs in the future
 * @param temporal Temporal with time
 * @returns true if the temporal occurs in the future
 */
export function isFutureTime(temporal: TemporalWithTime): boolean {
  const now = Temporal.Now.plainTimeISO();
  const plainTime = asPlainTime(temporal);
  return now.until(plainTime).sign > 0;
}
