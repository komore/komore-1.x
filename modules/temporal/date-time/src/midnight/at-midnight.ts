import { cloneInstant } from '../../clone-instant';
import type { InstantWithDateTime } from '../instant-with-date-time';

/**
 * Creates an instant that is set at midnight for the given instant
 *
 * Note: in practice, this means the date is changed to the next day
 * @param instant Instant
 * @returns Instant set at midnight
 */
export function atMidnight<T extends InstantWithDateTime>(instant: T): T {
  return cloneInstant(instant, zdt =>
    zdt.with({ hour: 0, minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 }).add({ days: 1 })
  );
}
