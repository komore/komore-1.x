import type { LocalDate } from './local-date';

/**
 * Creates a local date
 * @param date Date
 * @returns Local date
 */
export function createLocalDate(date: Date | string | number): LocalDate {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return {
    _: d,
    _t: 'local-date'
  } as LocalDate;
}
