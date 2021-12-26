import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a function that tests whether a temporal occurs the week after a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs the week after the reference temporal
 */
export function isWeekAfter(referenceTemporal: TemporalWithDate): (temporal: TemporalWithDate) => boolean {
  const referencePd = asPlainDate(referenceTemporal);
  const referenceStartOfWeek = referencePd.subtract({ days: referencePd.dayOfWeek - 1 });
  const referenceStartOfNextWeek = referenceStartOfWeek.add({ weeks: 1 });
  return temporal => {
    const temporalPd = asPlainDate(temporal);
    const duration = referenceStartOfNextWeek.until(temporalPd, { largestUnit: 'week' });
    return duration.sign >= 0 && duration.weeks === 0;
  };
}
