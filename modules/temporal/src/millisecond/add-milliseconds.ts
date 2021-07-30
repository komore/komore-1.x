import { cloneInstant } from '../../clone-instant';
import type { InstantWithTime } from '../instant-with-time';

/**
 * Adds milliseconds to an instant with time
 * @param instant Instant
 * @param milliseconds Number of milliseconds to add
 * @returns Instant with the added milliseconds
 * @template T Instant type
 */
export function addMilliseconds<T extends InstantWithTime>(instant: T, milliseconds: number): T {
  return cloneInstant(instant, zdt => zdt.add({ milliseconds }));
}
