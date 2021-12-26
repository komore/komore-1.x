import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';

/**
 * Creates a function that tests whether a temporal occurs on the same date as a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs on the same date as the reference temporal
 */
export function isSameDateAs(
  referenceTemporal: TemporalWithDate | TemporalWithPartialDate
): (temporal: TemporalWithDate | TemporalWithPartialDate) => boolean {
  const referencePlainDate = asPlainDate(referenceTemporal);
  return temporal => {
    const plainDate = asPlainDate(temporal);
    return referencePlainDate.until(plainDate).sign === 0;
  };
}
