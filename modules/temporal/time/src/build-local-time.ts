import type { Temporal } from 'proposal-temporal';
import type { LocalTime } from './local-time';
import { localTimeMarker } from './local-time-marker';

/**
 * Builds a local time from a standard temporal zoned date time
 * @param temporalZonedDateTime Temporal zoned date time
 * @returns Local time
 */
export function buildLocalTime(temporalZonedDateTime: Temporal.ZonedDateTime): LocalTime {
  return {
    _withTime: undefined as never,
    _t: localTimeMarker,
    _: temporalZonedDateTime
  };
}
