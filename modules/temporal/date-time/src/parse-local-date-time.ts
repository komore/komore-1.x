import { Temporal } from 'proposal-temporal';
import { buildLocalDateTime } from './build-local-date-time';
import type { LocalDateTime } from './local-date-time';

/**
 * Parses a local date time
 * @param localDateTimeString Local date time string
 * @returns Local date time
 */
export function parseLocalDateTime(localDateTimeString: string): LocalDateTime {
  const tz = Temporal.now.timeZone();
  const pdt = Temporal.PlainDateTime.from(localDateTimeString);
  const zdt = pdt.toZonedDateTime(tz);
  return buildLocalDateTime(zdt);
}
