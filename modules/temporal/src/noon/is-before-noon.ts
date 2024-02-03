import { asPlainTime } from '../as-plain-time';
import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether a temporal with time occurs before noon
 *
 * @param temporal Temporal with time
 * @returns true if the temporal occurs before noon
 */
export function isBeforeNoon(temporal: TemporalWithTime): boolean {
  const plainTime = asPlainTime(temporal);
  const noon = Temporal.PlainTime.from('12:00');
  return plainTime.until(noon).sign > 0;
}
