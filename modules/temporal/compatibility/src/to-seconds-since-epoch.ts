import type { TemporalWithDate } from '';

/**
 * Gets the number of seconds since the Epoch, from a temporal
 * @param temporal Temporal
 * @return Number of seconds since the 1st of January 1970
 */
export function toSecondsSinceEpoch(temporal: TemporalWithDate): number {
  return temporal.epochSeconds;
}
