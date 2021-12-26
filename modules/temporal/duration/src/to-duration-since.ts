import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate, type TemporalWithTime } from '@komore/temporal';

/**
 * Creates a function that returns the duration since a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that returns the duration since the reference temporal
 */
export function toDurationSince<T extends TemporalWithDate | TemporalWithTime>(
  referenceTemporal: T
): (temporal: T) => Temporal.Duration {
  return temporal => (temporal as Temporal.PlainDateTime).since(referenceTemporal);
}
