import { type TemporalWithTime } from './temporal-with-time';

/**
 * Converts a temporal with time, converting the type of a temporal with date if necessary
 *
 * @param temporal Temporal with time
 * @returns Plain time
 * @private
 */
export function asPlainTime(temporal: TemporalWithTime): Temporal.PlainTime {
  if (temporal instanceof Temporal.PlainTime) {
    return temporal;
  } else {
    return temporal.toPlainTime();
  }
}
