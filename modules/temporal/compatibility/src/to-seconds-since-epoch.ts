import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets the number of seconds since the Epoch, from a temporal
 * @param temporal Temporal
 * @return Number of seconds since the 1st of January 1970
 */
export function toSecondsSinceEpoch(temporal: Temporal.PlainDateTime | Temporal.ZonedDateTime): number {
  const zonedDateTime =
    temporal instanceof Temporal.ZonedDateTime ? temporal : temporal.toZonedDateTime(Temporal.Now.timeZone());
  return zonedDateTime.epochSeconds;
}
