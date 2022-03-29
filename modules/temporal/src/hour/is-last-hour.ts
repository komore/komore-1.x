import { getNowFor } from '../get-now-for';
import { type TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Tests whether a temporal occurs during the last hour
 * @param instant Instant with time
 * @returns true if the instant occurs during the last hour
 */
export function isLastHour(temporal: TemporalWithDateTime): boolean {
  const now = getNowFor(temporal);
  const lastHour = now.subtract({ hours: 1 });
  const startOfTemporalHour = temporal.with({ minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 });
  const duration = startOfTemporalHour.until(lastHour, { largestUnit: 'hours' });
  return duration.sign >= 0 && duration.hours === 0;
}
