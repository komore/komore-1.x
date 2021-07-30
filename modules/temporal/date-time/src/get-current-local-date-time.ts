import { Temporal } from 'proposal-temporal';
import { buildLocalDateTime } from './build-local-date-time';
import type { LocalDateTime } from './local-date-time';

/**
 * Gets the current local date time
 * @returns Current local date time
 */
export function getCurrentLocalDateTime(): LocalDateTime {
  const zdt = Temporal.now.zonedDateTimeISO();
  return buildLocalDateTime(zdt);
}
