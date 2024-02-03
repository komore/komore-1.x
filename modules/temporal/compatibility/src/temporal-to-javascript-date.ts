import { localTimeZone } from '@komore/temporal';

/**
 * Returns a JavaScript Date object from a temporal
 *
 * @param temporal Temporal
 * @returns JavaScript Date object
 */
export function temporalToJavaScriptDate(
  temporal: Temporal.PlainDateTime | Temporal.ZonedDateTime | Temporal.Instant
): Date {
  const instant =
    temporal instanceof Temporal.Instant
      ? temporal
      : temporal instanceof Temporal.ZonedDateTime
        ? temporal.toInstant()
        : temporal.toZonedDateTime(localTimeZone()).toInstant();
  return new Date(instant.epochMilliseconds);
}
