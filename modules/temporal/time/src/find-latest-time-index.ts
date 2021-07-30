import type { InstantWithTime } from './instant-with-time';

/**
 * Finds the index of the latest time in a list of instants
 * @param instants Instants
 * @returns Latest time index, or `-1` if the list of instants is empty
 */
export function findEarliestTimeIndex(instants: ReadonlyArray<InstantWithTime>): number {
  const instantsWithPt = instants.map(instant => [instant, instant._.toPlainTime()] as const);
  return instantsWithPt.reduce((prevIndex, curr, currIndex, arr) => {
    if (prevIndex === -1) {
      return currIndex;
    }

    const prevPt = arr[prevIndex][1];
    const currPt = curr[1];
    const duration = currPt.until(prevPt);

    return duration.sign > 0 ? currIndex : prevIndex;
  }, -1);
}
