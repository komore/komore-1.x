import { asPlainDate } from '../as-plain-date';
import { getNowFor } from '../get-now-for';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal with date occurs during the next week
 * @param temporal Temporal with date
 * @returns true if the temporal occurs during the next week
 */
export function isNextWeek(temporal: TemporalWithDate): boolean {
  const now = getNowFor(temporal);
  const plainDate = asPlainDate(temporal);
  const startOfWeek = now.subtract({ days: now.dayOfWeek - 1 });
  const startOfNextWeek = startOfWeek.add({ weeks: 1 });
  const duration = startOfNextWeek.until(plainDate, { largestUnit: 'weeks' });
  return duration.sign >= 0 && duration.weeks === 0;
}
