import type { Instant } from '../instant';
import { createDuration } from './create-duration';
import type { Duration } from './duration';
import { durationMarker } from './duration-marker';

/**
 * Gets the duration between two instants
 * @param begin Begin instant
 * @param end End instant
 * @returns Duration
 */
export function getDurationBetween(begin: Instant, end: Instant): Duration {
  const td = begin._.until(end._);
  return {
    _t: durationMarker
  }
  return createDuration(end._.getTime() - start._.getTime());
}
