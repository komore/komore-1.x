import { InvalidDateStringError } from '../error/invalid-date-string-error';
import { type DateString } from './date-string';

/**
 * Casts a date string value to a date string
 *
 * @param date Date string value
 * @returns Date string
 */
export function asDateString(date: string | Temporal.PlainDate): DateString {
  try {
    const temporal = typeof date === 'string' ? Temporal.PlainDate.from(date) : date;
    return temporal.toString() as DateString;
  } catch {
    throw new InvalidDateStringError(`invalid date string value "${date}"`, date);
  }
}
