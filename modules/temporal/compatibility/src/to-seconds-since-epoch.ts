import { Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '@komore/temporal';

/**
 * Gets the number of seconds since the Epoch, from a temporal
 * @param temporal Temporal
 * @return Number of seconds since the 1st of January 1970
 */
export function toSecondsSinceEpoch(temporal: TemporalWithDate): number {
  const zonedDateTime =
    temporal instanceof Temporal.ZonedDateTime ? temporal : temporal.toZonedDateTime(Temporal.Now.timeZone());
  return zonedDateTime.epochSeconds;
}
