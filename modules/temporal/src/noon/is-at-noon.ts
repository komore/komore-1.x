import { Temporal } from '@js-temporal/polyfill';
import { asPlainTime } from '../as-plain-time';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether a temporal with time occurs at noon
 * @param temporal Temporal with time
 * @returns true if the temporal occurs at noon
 */
export function isAtNoon(temporal: TemporalWithTime): boolean {
  const pt = asPlainTime(temporal);
  const noon = Temporal.PlainTime.from('12:00');
  return pt.until(noon).sign === 0;
}
