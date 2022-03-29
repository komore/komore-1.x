import { getISO8601RecurringIntervalPrefix } from './get-iso-8601-recurring-interval-prefix';
import { type Interval } from './interval';
import { type IntervalTemporal } from './interval-temporal';
import { intervalToDuration } from './interval-to-duration';
import { type ISO8601IntervalOptions } from './iso-8601-interval-options';

/**
 * Creates a function that returns an ISO 8610 interval string, given an interval
 * @param options ISO 8601 interval options
 * @returns Function that returns an ISO 8610 interval string, given an interval
 */
export function intervalToISO8601Interval(
  options?: ISO8601IntervalOptions
): (interval: Interval<IntervalTemporal>) => string {
  const recurringPrefix = getISO8601RecurringIntervalPrefix(options?.recurringRepetitions);
  const durationFor = options?.durationFor;

  switch (durationFor) {
    case undefined:
      return interval => {
        const start = interval.start.toString();
        const end = interval.end.toString();
        return `${recurringPrefix}${start}/${end}`;
      };
    case 'start':
      return interval => {
        const start = intervalToDuration(interval).toString();
        const end = interval.end.toString();
        return format(recurringPrefix, start, end);
      };
    case 'end':
      return interval => {
        const start = interval.start.toString();
        const end = intervalToDuration(interval).toString();
        return format(recurringPrefix, start, end);
      };
  }
}

function format(recurringPrefix: string, start: string, end: string) {
  return `${recurringPrefix}${start}/${end}`;
}
