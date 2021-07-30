import type { LocalTime } from './local-time';
import { localTimeMarker } from './local-time-marker';
import type { TimeInformation } from './time-information';

/**
 * Creates a local time
 * @param date Date
 * @returns Local time
 */
export function createLocalTime(date: Date | string | number | Partial<TimeInformation>): LocalTime {
  const d =
    date instanceof Date || typeof date === 'string' || typeof date === 'number'
      ? createLocalTimeFromDate(date)
      : createLocalTimeFromTimeInformation(date);
  return {
    _: d,
    _instantWithTime: undefined as never,
    _t: localTimeMarker
  } as LocalTime;
}

/**
 * Creates a local time date from a date
 * @param date Date
 * @returns Local time date
 */
function createLocalTimeFromDate(date: Date | string | number): Date {
  const d = new Date(date);
  d.setFullYear(2020, 0, 1);
  return d;
}

/**
 * Creates a local time date from time information
 * @param timeInformation Time information
 * @returns Local time date
 */
function createLocalTimeFromTimeInformation({ hours, minutes, seconds, milliseconds }: Partial<TimeInformation>): Date {
  const d = new Date();
  d.setFullYear(2020, 0, 1);
  d.setHours(hours ?? 0, minutes ?? 0, seconds ?? 0, milliseconds ?? 0);
  return d;
}
