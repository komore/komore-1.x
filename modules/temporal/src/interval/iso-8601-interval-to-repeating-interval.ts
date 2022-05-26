import { type TemporalWithDate } from '../temporal-with-date';
import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';
import { intervalToRepeatingInterval } from './interval-to-repeating-interval';
import { InvalidISO8601IntervalError } from './invalid-iso-8601-interval-error';
import { iso8601IntervalPartsToInterval } from './iso-8601-interval-parts-to-interval';
import { type RepeatingInterval } from './repeating-interval';

/**
 * Creates a function that builds a repeating interval of a given temporal class from an ISO 8601 interval string
 * @param temporalClass Temporal class
 * @returns Function that builds a repeating interval of the given temporal class from an ISO 8601 interval string
 */
export function iso8601IntervalToRepeatingInterval<T extends IntervalTemporal>(temporalClass: {
  from(str: string): T;
}): (iso8601Interval: string) => RepeatingInterval<T> {
  return iso8601Interval => {
    const potentialParts = iso8601Interval.split('/');
    if (potentialParts.length !== 3) {
      throw new InvalidISO8601IntervalError(
        'an ISO 8601 repeating interval must feature 2 / characters',
        iso8601Interval
      );
    }

    const parts = potentialParts as unknown as readonly [repartitions: string, start: string, end: string];
    const [repetitionsString, startString, endString] = parts;
    const repetitions = parseRepetitions(repetitionsString, iso8601Interval);
    const interval = iso8601IntervalPartsToInterval(temporalClass, iso8601Interval, startString, endString);
    const isStartDuration = startString.charAt(0) === 'P';
    const direction = isStartDuration ? 'past' : 'future';

    return intervalToRepeatingInterval(
      repetitions !== undefined
        ? {
            direction,
            repetitions,
          }
        : { direction }
    )(interval as Interval<TemporalWithDate>) as RepeatingInterval<T>;
  };
}

function parseRepetitions(repetitionsString: string, iso8601Interval: string): number | undefined {
  if (repetitionsString.charAt(0) !== 'R') {
    throw new InvalidISO8601IntervalError(
      'an ISO 8601 repeating pattern must start with the character R',
      iso8601Interval
    );
  }

  const repetitionsValue = repetitionsString.slice(1);
  if (repetitionsValue.length === 0) {
    return undefined;
  }

  const repetitions = Number(repetitionsValue);
  if (isNaN(repetitions)) {
    throw new InvalidISO8601IntervalError('invalid ISO 8601 repeating pattern number (NaN)', iso8601Interval);
  }

  if (Math.floor(repetitions) !== repetitions) {
    throw new InvalidISO8601IntervalError(
      'invalid ISO 8601 repeating pattern number (not an integer)',
      iso8601Interval
    );
  }

  if (repetitions === -1) {
    return undefined;
  }

  if (repetitions < 0) {
    throw new InvalidISO8601IntervalError(
      'invalid ISO 8601 repeating pattern number (neither -1 or >= 0)',
      iso8601Interval
    );
  }

  return repetitions;
}
