import type { InstantWithDateTime } from './instant-with-date-time';
import type { StructuredDateTime } from './structured-date-time';

/**
 * Gets a structured date time information from an instant with a date and time
 * @param instant Instant with date and time
 * @returns Structured date time
 */
export function getStructuredDateTime(instant: InstantWithDateTime): StructuredDateTime {
  const { day, month, year, dayOfYear: yearDay, dayOfWeek: weekDay, weekOfYear: week } = instant._;
  const { hour, minute, second, millisecond, microsecond, nanosecond } = instant._;
  return {
    day,
    month,
    year,
    week,
    yearDay,
    weekDay,
    hour,
    minute,
    second,
    millisecond,
    microsecond,
    nanosecond
  };
}
