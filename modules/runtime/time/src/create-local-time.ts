import type { LocalTime } from './local-time';

/**
 * Creates a local time
 * @param date Date
 * @returns Local time
 */
export function createLocalTime(date: Date | string | number): LocalTime {
  const d = new Date(date);
  d.setFullYear(0, 0, 1);
  return {
    _: d,
    _t: 'local-time'
  } as LocalTime;
}
