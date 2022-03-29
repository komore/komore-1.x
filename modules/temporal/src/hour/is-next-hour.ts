import { getNowFor } from '../get-now-for';
import { type TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Tests whether a temporal occurs during the next hour
 * @param instant Instant with time
 * @returns true if the instant occurs during the next hour
 */
export function isNextHour(temporal: TemporalWithDateTime): boolean {
  const now = getNowFor(temporal);
  const startOfNextHour = now
    .add({ hours: 1 })
    .with({ minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 });
  const duration = startOfNextHour.until(temporal, { largestUnit: 'hours' });
  return duration.sign >= 0 && duration.hours === 0;
}
