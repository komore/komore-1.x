import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Creates a function that tests whether a temporal occurs at a later date than a reference temporal
 *
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs at a later date than the reference temporal
 */
export function isLaterDateThan<T extends TemporalWithDate | Temporal.PlainYearMonth>(
  referenceTemporal: T
): (temporal: T) => boolean {
  if (referenceTemporal instanceof Temporal.PlainYearMonth) {
    return temporal => (temporal as Temporal.PlainYearMonth).until(referenceTemporal).sign < 0;
  } else {
    return temporal => temporal.until(referenceTemporal).sign < 0;
  }
}
