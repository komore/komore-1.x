import { nowFor } from '../now-for';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs last year
 *
 * @param temporal Temporal
 * @returns true if the temporal occurs last year
 */
export function isLastYear(temporal: TemporalWithDate | Temporal.PlainYearMonth): boolean {
  const now = nowFor(temporal);
  return temporal.year === now.year - 1;
}
