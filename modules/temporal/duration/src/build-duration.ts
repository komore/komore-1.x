import type { Temporal } from 'proposal-temporal';
import type { Duration } from './duration';
import { durationMarker } from './duration-marker';

/**
 * Builds a duration from a standard temporal duration
 * @param temporalDuration Temporal duration
 * @returns Duration
 */
export function buildDuration(temporalDuration: Temporal.Duration): Duration {
  return {
    _t: durationMarker,
    _: temporalDuration
  };
}
