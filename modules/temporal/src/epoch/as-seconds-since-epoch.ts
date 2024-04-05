import { type SecondsSinceEpoch } from './seconds-since-epoch';

/**
 * Returns the number of seconds since the Epoch, from a temporal
 *
 * @param temporal Temporal
 * @return Number of seconds since the 1st of January 1970
 */
export function asSecondsSinceEpoch(temporal: Temporal.PlainDateTime | Temporal.ZonedDateTime): SecondsSinceEpoch {
  const zonedDateTime =
    temporal instanceof Temporal.ZonedDateTime ? temporal : temporal.toZonedDateTime(Temporal.Now.timeZoneId());
  return zonedDateTime.epochSeconds as SecondsSinceEpoch;
}
