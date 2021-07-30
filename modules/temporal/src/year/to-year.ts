import type { Temporal } from 'proposal-temporal';
import { asPlainDate } from '../as-plain-date';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Returns the year from a temporal
 * @param temporal Temporal
 * @returns Year
 */
export function toYear(temporal: TemporalWithDate | Temporal.PlainYearMonth): number {
  const plainDate = asPlainDate(temporal);
  return plainDate.year;
}
