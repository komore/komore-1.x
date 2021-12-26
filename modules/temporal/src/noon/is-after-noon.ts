import { Temporal } from '@js-temporal/polyfill';
import { asPlainTime } from '../as-plain-time';
import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether a temporal with time occurs after noon
 * @param temporal Temporal with time
 * @returns true if the temporal occurs after noon
 */
export function isAfterNoon(temporal: TemporalWithTime): boolean {
  const plainTime = asPlainTime(temporal);
  const noon = Temporal.PlainTime.from('12:00');
  return plainTime.until(noon).sign < 0;
}
