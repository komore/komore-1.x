import { Temporal } from 'proposal-temporal';
import type { LocalTime } from './local-time';
import { localTimeMarker } from './local-time-marker';
import { timeDateComponent } from './time-date-component';

/**
 * Parses a local time
 * @param localTime Local time string
 * @returns Local time
 */
export function parseLocalTime(localTimeString: string): LocalTime {
  const timeZone = Temporal.now.timeZone();
  const pt = Temporal.PlainTime.from(localTimeString);
  const zdt = pt.toZonedDateTime({
    plainDate: timeDateComponent,
    timeZone
  });
  return {
    _withTime: undefined as never,
    _t: localTimeMarker,
    _: zdt
  };
}
