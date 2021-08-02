import { Temporal } from '@js-temporal/polyfill';

export function fromISO8601Duration(iso8601DurationString: string): Temporal.Duration {
  return Temporal.Duration.from(iso8601DurationString);
}
