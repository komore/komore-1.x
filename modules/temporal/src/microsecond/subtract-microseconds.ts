import { cloneInstant } from '../../clone-instant';
import type { InstantWithTime } from '../instant-with-time';

/**
 * Subtracts microseconds from an instant with time
 * @param instant Instant
 * @param microseconds Number of microseconds to subtract
 * @returns Instant with the subtracted microseconds
 * @template T Instant type
 */
export function subtractMicroseconds<T extends InstantWithTime>(instant: T, microseconds: number): T {
  return cloneInstant(instant, zdt => zdt.subtract({ microseconds }));
}
