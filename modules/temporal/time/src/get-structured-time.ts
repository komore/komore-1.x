import type { InstantWithTime } from './instant-with-time';
import type { StructuredTime } from './structured-time';

/**
 * Gets structured time information from an instant with time
 * @param instant Instant with time
 * @returns Structure time
 */
export function getStructuredTime(instant: InstantWithTime): StructuredTime {
  const { hour, minute, second, millisecond, microsecond, nanosecond } = instant._;
  return { hour, minute, second, millisecond, microsecond, nanosecond };
}
