import { cloneInstant } from '../../clone-instant';
import type { InstantWithTime } from '../instant-with-time';

/**
 * Adds microseconds to an instant with time
 * @param instant Instant
 * @param microseconds Number of microseconds to add
 * @returns Instant with the added microseconds
 * @template T Instant type
 */
export function addMicroseconds<T extends InstantWithTime>(instant: T, microseconds: number): T {
  return cloneInstant(instant, zdt => zdt.add({ microseconds }));
}
