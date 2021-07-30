import type { Instant } from '../instant';
import type { LocalDateTime } from './local-date-time';
import { localDateTimeMarker } from './local-date-time-marker';

/**
 * Tests whether an instant is a local date time
 * @param instant Instant
 * @returns true if the instant is a local date time
 */
export function isLocalDateTime(instant: Instant): instant is LocalDateTime {
  return instant._t === localDateTimeMarker;
}
