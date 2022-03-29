import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns a JavaScript Date object from a temporal
 * @param temporal Temporal
 * @returns JavaScript Date object
 */
export function toJavaScriptDate(temporal: Temporal.PlainDateTime | Temporal.ZonedDateTime): Date {
  const zonedDateTime =
    temporal instanceof Temporal.ZonedDateTime ? temporal : temporal.toZonedDateTime(Temporal.Now.timeZone());
  const instant = zonedDateTime.toInstant();
  return new Date(instant.epochMilliseconds);
}
