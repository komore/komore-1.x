import { InvalidDateTimeStringError } from '../error/invalid-date-time-string-error';
import { Temporal } from '../temporal';
import { type DateTimeString } from './date-time-string';
import { dateTimeStringToInstant } from './date-time-string-to-instant';

/**
 * Casts a date time string value to a date time string
 *
 * @param dateTime Date time string value
 * @returns Date time string
 */
export function asDateTimeString(
  dateTime: string | Temporal.PlainDateTime | Temporal.ZonedDateTime | Temporal.Instant
): DateTimeString {
  try {
    const temporal =
      typeof dateTime === 'string'
        ? dateTimeStringToInstant(dateTime)
        : dateTime instanceof Temporal.ZonedDateTime
        ? dateTime.toInstant()
        : dateTime instanceof Temporal.PlainDateTime
        ? dateTime.toZonedDateTime(Temporal.Now.timeZoneId()).toInstant()
        : dateTime;
    return (temporal.toString().substring(0, 19) + 'Z') as DateTimeString;
  } catch (e) {
    throw new InvalidDateTimeStringError(`invalid date time string value "${dateTime}"`, dateTime);
  }
}
