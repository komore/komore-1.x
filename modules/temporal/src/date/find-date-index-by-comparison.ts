import type { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Finds the index of the temporal with the earliest date
 * @param temporals List of temporals with date
 * @param predicate Predicate that returns true when the current temporal should be kept
 * @returns Index of the temporal with the earliest date, or `-1` if the list is empty
 * @private
 */
export function findDateIndexByComparison(
  temporals: ReadonlyArray<TemporalWithDate>,
  predicate: (duration: Temporal.Duration) => boolean
): number {
  const temporalsWithPlainDate = temporals.map(temporal => ({ temporal, plainDate: temporal._.toPlainDate() }));
  return temporalsWithPlainDate.reduce((prevIndex, curr, currIndex, arr) => {
    if (prevIndex === -1) {
      return currIndex;
    }
    const prev = arr[prevIndex];
    const duration = curr.plainDate.until(prev.plainDate);
    return predicate(duration) ? currIndex : prevIndex;
  }, -1);
}
