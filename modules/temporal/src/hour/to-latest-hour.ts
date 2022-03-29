import { findTemporal } from '../find-temporal';
import { type TemporalWithTime } from '../temporal-with-time';
import { timeToHour } from './time-to-hour';

/**
 * Creates a function that picks the temporal with the latest hour from a list, with a default value when the list is empty
 * @param defaultIfEmpty Default value to use when the list of temporals is empty
 * @returns Function that picks the temporal with the latest hour from a list, with the default value when the list is empty
 * @template T Temporal type
 */
export function toLatestHour<T extends TemporalWithTime>(defaultIfEmpty?: T): (temporals: ReadonlyArray<T>) => T {
  return temporals =>
    findTemporal(temporals, timeToHour, (previous, current) => previous < current, 'latest hour', defaultIfEmpty);
}
