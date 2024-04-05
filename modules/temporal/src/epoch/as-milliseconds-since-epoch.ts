import { type MillisecondsSinceEpoch } from './milliseconds-since-epoch';

/**
 * Returns the number of milliseconds since the Epoch, from a temporal
 *
 * @param temporal Temporal
 * @return Number of milliseconds since the 1st of January 1970
 */
export function asMillisecondsSinceEpoch(
  temporal: Temporal.PlainDateTime | Temporal.ZonedDateTime
): MillisecondsSinceEpoch {
  const zonedDateTime =
    temporal instanceof Temporal.ZonedDateTime ? temporal : temporal.toZonedDateTime(Temporal.Now.timeZoneId());
  return zonedDateTime.epochMilliseconds as MillisecondsSinceEpoch;
}
