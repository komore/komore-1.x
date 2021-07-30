import type { Temporal } from 'proposal-temporal';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Finds a date by duration
 *
 * Internal function that passes the duration between the current and previous dates in a list.
 * @param temporals List of temporals with date
 * @param predicate Predicate that returns true when the current temporal should be kept
 * @returns Temporal that was kept, or `undefined` if the list is empty
 * @template T Temporal with date type
 * @private
 */
export function findDateByDuration<T extends TemporalWithDate>(
  temporals: ReadonlyArray<T>,
  predicate: (duration: Temporal.Duration) => boolean
): T | undefined {
  const temporalsWithPlainDate = temporals.map(temporal => ({ temporal, plainDate: temporal._.toPlainDate() }));
  return temporalsWithPlainDate.reduce((prev, curr) => {
    if (prev === undefined) {
      return curr;
    }
    const duration = curr.plainDate.until(prev.plainDate);
    return predicate(duration) ? curr : prev;
  }, undefined as typeof temporalsWithPlainDate[0] | undefined)?.temporal;
}
