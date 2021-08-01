import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns the time zone identifier used by the given zoned date time
 * @param zonedDateTime Zoned date time
 * @returns Time zone identifier
 */
export function toTimeZoneId(zonedDateTime: Temporal.ZonedDateTime): string;

/**
 * Returns the time zone identifier used by the given time zone
 * @param timeZone Time zone
 * @returns Time zone identifier
 */
export function toTimeZoneId(timeZone: Temporal.TimeZone): string;

export function toTimeZoneId(zonedDateTimeOrTimeZone: Temporal.ZonedDateTime | Temporal.TimeZone): string {
  if (zonedDateTimeOrTimeZone instanceof Temporal.ZonedDateTime) {
    const zonedDateTime = zonedDateTimeOrTimeZone;
    return zonedDateTime.timeZone.id;
  } else {
    const timeZone = zonedDateTimeOrTimeZone;
    return timeZone.id;
  }
}
