import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';

/**
 * Creates a function that tests whether a temporal occurs at an earlier date than a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs at an earlier date than the reference temporal
 */
export function isEarlierDateThan(
  referenceTemporal: TemporalWithDate | TemporalWithPartialDate
): (earlierDate: TemporalWithDate | TemporalWithPartialDate) => boolean {
  const referencePlainDate = asPlainDate(referenceTemporal);
  return earlierDate => {
    const plainDate = asPlainDate(earlierDate);
    return plainDate.until(referencePlainDate).sign > 0;
  };
}
