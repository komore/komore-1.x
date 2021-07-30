import { Temporal } from 'proposal-temporal';
import type { InstantWithTime } from './instant-with-time';

/**
 * Tests whether an instant with time occurs in the future
 * @param instant Instant with time
 * @returns true if the instant occurs in the future
 */
export function isFutureTime(instant: InstantWithTime): boolean {
  const now = Temporal.now.plainTimeISO();
  const pt = instant._.toPlainTime();
  return now.until(pt).sign > 0;
}
