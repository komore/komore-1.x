import { Temporal } from 'proposal-temporal';
import { buildLocalTime } from './build-local-time';
import type { LocalTime } from './local-time';
import { timeDateComponent } from './time-date-component';

/**
 * Gets the current local time
 * @returns Current local time
 */
export function getCurrentLocalTime(): LocalTime {
  const timeZone = Temporal.now.timeZone();
  const pt = Temporal.now.plainTimeISO();
  const zdt = pt.toZonedDateTime({ timeZone, plainDate: timeDateComponent });
  return buildLocalTime(zdt);
}
