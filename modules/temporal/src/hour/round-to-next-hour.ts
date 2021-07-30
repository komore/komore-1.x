import { cloneInstant } from '../../clone-instant';
import type { InstantWithTime } from '../instant-with-time';

/**
 * Rounds an instant to the next hour
 * @param instant Instant with time
 * @returns Instant rounded to the next hour
 * @template T Instant with time type
 */
export function roundToNextHour<T extends InstantWithTime>(instant: T): T {
  return cloneInstant(instant, zdt =>
    zdt.add({ hours: 1 }).with({ minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 })
  );
}
