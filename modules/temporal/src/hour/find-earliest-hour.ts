import type { InstantWithTime } from '../instant-with-time';

/**
 * Finds the earliest hour from a list of instants with time
 * @param instants List of instants
 * @returns Earliest hour
 */
export function findEarliestHour<T extends InstantWithTime>(instants: ReadonlyArray<T>): T {
  const firstInstant = instants[0];
  const earliestInstant = instants.reduce(
    (prev, curr) => (prev === curr || curr._.until(prev._, { largestUnit: 'hours' }).sign < 0 ? curr : prev),
    firstInstant
  );
  return earliestInstant;
}
