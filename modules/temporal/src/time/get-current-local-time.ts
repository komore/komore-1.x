import { Temporal } from '@js-temporal/polyfill';

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
