import type { Temporal } from '@js-temporal/polyfill';
import type { InstantWithTime } from './instant-with-time';

/**
 * Finds the earliest time in a list of instants
 * @param instants Instants
 * @returns Earliest time, or `undefined` if the list of instants is empty
 */
export function findEarliestTime<T extends InstantWithTime>(instants: ReadonlyArray<T>): T | undefined {
  const instantsWithPt = instants.map(instant => [instant, instant._.toPlainTime()] as const);
  const earliestInstantWithPt = instantsWithPt.reduce((prev, curr) => {
    if (prev === undefined) {
      return curr;
    }

    const prevPt = prev[1];
    const currPt = curr[1];
    const duration = currPt.until(prevPt);

    return duration.sign < 0 ? curr : prev;
  }, undefined as readonly [T, Temporal.PlainTime] | undefined);

  return earliestInstantWithPt?.[0];
}
