import type { TemporalWithTime } from '../temporal-with-time';

/**
 *
 * @param temporal
 * @returns
 */
export function atNoon<T extends TemporalWithTime>(temporal: T): T {
  return temporal;
}
