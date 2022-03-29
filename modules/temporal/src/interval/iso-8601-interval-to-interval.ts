import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';
import { InvalidISO8601IntervalError } from './invalid-iso-8601-interval-error';
import { iso8601IntervalPartsToInterval } from './iso-8601-interval-parts-to-interval';

/**
 * Creates a function that builds an interval of a given temporal class from an ISO 8601 interval string
 * @param temporalClass Temporal class
 * @returns Function that builds an interval of the given temporal class from an ISO 8601 interval string
 */
export function iso8601IntervalToInterval<T extends IntervalTemporal>(temporalClass: {
  from(str: string): T;
}): (iso8601Interval: string) => Interval<T> {
  return iso8601Interval => {
    const parts = iso8601Interval.split('/');
    if (parts.length !== 2) {
      throw new InvalidISO8601IntervalError('an ISO 8601 interval must feature a single / character', iso8601Interval);
    }

    const [startString, endString] = parts;

    return iso8601IntervalPartsToInterval(temporalClass, iso8601Interval, startString, endString);
  };
}
