import { cloneInstant } from '../../clone-instant';
import type { InstantWithTime } from '../instant-with-time';

/**
 * Subtracts milliseconds from an instant with time
 * @param instant Instant
 * @param milliseconds Number of milliseconds to subtract
 * @returns Instant with the subtracted milliseconds
 * @template T Instant type
 */
export function subtractMilliseconds<T extends InstantWithTime>(instant: T, milliseconds: number): T {
  return cloneInstant(instant, zdt => zdt.subtract({ milliseconds }));
}
