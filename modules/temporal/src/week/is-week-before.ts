import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a function that tests whether a temporal occurs the week before a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs the week before the reference temporal
 */
export function isWeekBefore(referenceTemporal: TemporalWithDate): (temporal: TemporalWithDate) => boolean {
  const referencePd = asPlainDate(referenceTemporal);
  const referenceStartOfWeek = referencePd.subtract({ days: referencePd.dayOfWeek - 1 });
  const referenceStartOfPreviousWeek = referenceStartOfWeek.subtract({ weeks: 1 });
  return temporal => {
    const temporalPd = asPlainDate(temporal);
    const duration = referenceStartOfPreviousWeek.until(temporalPd, { largestUnit: 'week' });
    return duration.sign >= 0 && duration.weeks === 0;
  };
}
