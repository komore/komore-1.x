import type { OffsetDateTime } from './offset-date-time';

/**
 * Creates an offset date time
 * @param date Date as a JavaScript object, an ISO 8601 string or a number of milliseconds since epoch
 * @returns Date time
 */
export function createOffsetDateTime(date: Date | string | number): OffsetDateTime {
  const d = new Date(date);
  return {
    _: d,
    _t: 'offset-date-time'
  } as OffsetDateTime;
}
