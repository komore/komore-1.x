import { Temporal } from 'proposal-temporal';
import type { InstantWithTime } from '../instant-with-time';

/**
 * Tests whether an instant occurs at noon
 * @param instant Instant
 * @returns true if the instant occurs at noon
 */
export function isNoon(instant: InstantWithTime): boolean {
  const pt = instant._.toPlainTime();
  const noon = Temporal.PlainTime.from('12:00');
  return pt.until(noon).sign === 0;
}
