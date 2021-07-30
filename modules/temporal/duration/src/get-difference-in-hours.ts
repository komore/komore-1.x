import type { InstantWithTime } from '../instant-with-time';

/**
 * Gets the difference between two temporals in days
 * @param from
 * @param until
 * @returns Difference in hours
 */
export function getDifferenceInHours(from: InstantWithTime, until: InstantWithTime): number {
  const td = from._.until(until, { largestUnit: 'hour' });
  return td.hours;
}
