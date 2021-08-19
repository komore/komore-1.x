import type { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate, TemporalWithTime } from '@komore/temporal';

/**
 * Creates a function that returns the duration until a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that returns the duration until the reference temporal
 */
export function toDurationUntil<T extends TemporalWithDate | TemporalWithTime>(
  referenceTemporal: T
): (temporal: T) => Temporal.Duration {
  return temporal => (temporal as Temporal.PlainDateTime).until(referenceTemporal);
}
