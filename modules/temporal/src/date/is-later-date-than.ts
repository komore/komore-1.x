import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';

/**
 * Creates a function that tests whether a temporal occurs at a later date than a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs at a later date than the reference temporal
 */
export function isLaterDateThan(
  referenceTemporal: TemporalWithDate | TemporalWithPartialDate
): (laterDate: TemporalWithDate | TemporalWithPartialDate) => boolean {
  const referencePlainDate = asPlainDate(referenceTemporal);
  return laterDate => {
    const plainDate = asPlainDate(laterDate);
    return plainDate.until(referencePlainDate).sign < 0;
  };
}
