import { isWeekBefore } from '../week/is-week-before';
import { type TemporalWithDate } from '../temporal-with-date';
import { isWeekEnd } from './is-week-end';

/**
 * Creates a function that tests whether a temporal occurs the week-end before a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs the week-end before the reference temporal
 */
export function isWeekEndBefore(referenceTemporal: TemporalWithDate): (temporal: TemporalWithDate) => boolean {
  // TODO: this is wrong and point to the week-end for the week after rather than the next occuring week-end
  const weekBefore = isWeekBefore(referenceTemporal);
  return temporal => isWeekEnd(temporal) && weekBefore(temporal);
}
