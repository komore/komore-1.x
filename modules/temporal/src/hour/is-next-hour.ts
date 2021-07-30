import { Temporal } from 'proposal-temporal';
import type { InstantWithTime } from '../instant-with-time';

/**
 * Tests whether an instant occurs during the next hour
 * @param instant Instant with time
 * @returns true if the instant occurs during the next hour
 */
export function isNextHour(instant: InstantWithTime): boolean {
  const now = Temporal.now.plainTimeISO();
  const pt = instant._.toPlainTime();
  return now.hour === pt.hour - 1;
}
