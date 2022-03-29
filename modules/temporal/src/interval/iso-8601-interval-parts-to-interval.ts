import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';
import { InvalidISO8601IntervalError } from './invalid-iso-8601-interval-error';

export function iso8601IntervalPartsToInterval<T extends IntervalTemporal>(
  temporalClass: {
    from(str: string): T;
  },
  iso8601Interval: string,
  startString: string,
  endString: string
): Interval<T> {
  const isStartDuration = startString.charAt(0) === 'P';
  const isEndDuration = endString.charAt(0) === 'P';

  if (isStartDuration && isEndDuration) {
    throw new InvalidISO8601IntervalError(
      'an ISO 8601 interval cannot feature a duration for both the start and end',
      iso8601Interval
    );
  }

  const start = temporalClass.from(startString);
  const end = temporalClass.from(endString);

  return {
    start,
    end,
  };
}
