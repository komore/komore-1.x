import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';

/**
 * Returns a function that tests whether a temporal occurs during the same month as a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs during the same month as the reference temporal
 */
export function isSameMonthAs(
  referenceTemporal: TemporalWithDate | TemporalWithPartialDate
): (temporal: TemporalWithDate | TemporalWithPartialDate) => boolean {
  const { year: referenceYear, month: referenceMonth } = asPlainDate(referenceTemporal);
  return temporal => {
    const { year, month } = asPlainDate(temporal);
    return referenceYear === year && referenceMonth === month;
  };
}
