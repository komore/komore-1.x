import type { Temporal } from '@js-temporal/polyfill';
import { getNowFor } from '@komore/temporal';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs last year
 * @param temporal Temporal
 * @returns true if the temporal occurs last year
 */
export function isLastYear(temporal: TemporalWithDate | Temporal.PlainYearMonth): boolean {
  const now = getNowFor(temporal);
  return now.year === temporal.year + 1;
}
