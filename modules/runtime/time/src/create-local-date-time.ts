import type { LocalDateTime } from './local-date-time';

/**
 * Creates a local date-time
 * @param date Date
 * @returns Local date time
 */
export function createLocalDateTime(date: Date | string | number): LocalDateTime {
  const d = new Date(date);
  return {
    _: d,
    _t: 'local-date-time'
  } as LocalDateTime;
}
