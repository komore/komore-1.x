import { Temporal } from 'proposal-temporal';
import type { InstantWithTime } from '../instant-with-time';

/**
 * Tests whether an instant occurs before noon
 * @param instant Instant
 * @returns true if the instant occurs before noon
 */
export function isBeforeNoon(instant: InstantWithTime): boolean {
  const pt = instant._.toPlainTime();
  const noon = Temporal.PlainTime.from('12:00');
  return pt.until(noon).sign > 0;
}
