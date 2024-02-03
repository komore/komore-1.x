import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs yesterday
 *
 * @param temporal Temporal
 * @returns true if the temporal occurs yesterday
 */
export function isYesterday(temporal: TemporalWithDate): boolean {
  const plainDate = asPlainDate(temporal);
  const now = Temporal.Now.plainDateISO();
  const yesterday = now.subtract({ days: 1 });
  return plainDate.until(yesterday).sign === 0;
}
