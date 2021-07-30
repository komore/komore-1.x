import { Temporal } from 'proposal-temporal';
import { buildDuration } from './build-duration';
import type { Duration } from './duration';
import { durationMarker } from './duration-marker';

/**
 * Creates a duration from a number of milliseconds
 * @param milliseconds Milliseconds
 * @returns Duration
 */
export function createDuration(milliseconds: number): Duration {
  buildDuration(Temporal.Duration.from())
  return {
    _t: durationMarker,
    _: milliseconds
  };
}
