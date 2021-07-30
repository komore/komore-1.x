import { getNowFor } from '@komore/temporal';
import type { Temporal } from 'proposal-temporal';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal with date occurs next year
 * @param temporal Temporal with date
 * @returns true if the temporal occurs next year
 */
export function isNextYear(temporal: TemporalWithDate | Temporal.PlainYearMonth): boolean {
  const now = getNowFor(temporal);
  return now.year === temporal.year - 1;
}
