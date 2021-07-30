import type { InstantWithTime } from '../../time/instant-with-time';

/**
 * Tests whether an instant occurs at midnight
 * @param instant Instant with time
 * @returns true if the instant occurs at midnight
 */
export function isAtMidnight(instant: InstantWithTime): boolean {
  const { hour, minute, second, millisecond, microsecond, nanosecond } = instant._;
  return hour + minute + second + millisecond + microsecond + nanosecond === 0;
}
