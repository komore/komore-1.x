import { isWeekAfter } from '../week/is-week-after';
import { type TemporalWithDate } from '../temporal-with-date';
import { isWeekEnd } from './is-week-end';

/**
 * Returns a function that tests whether a temporal occurs the week-end after a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs the week-end after the reference temporal
 */
export function isWeekEndAfter(referenceTemporal: TemporalWithDate): (temporal: TemporalWithDate) => boolean {
  // TODO: this is wrong and point to the week-end for the week after rather than the next occuring week-end
  const weekAfter = isWeekAfter(referenceTemporal);
  return temporal => isWeekEnd(temporal) && weekAfter(temporal);
}
