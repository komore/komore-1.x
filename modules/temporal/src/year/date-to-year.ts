import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns the year from a temporal with a date
 *
 * @param temporal Temporal
 * @returns Year
 */
export function dateToYear(temporal: TemporalWithDate | Temporal.PlainYearMonth): number {
  const plainDate = asPlainDate(temporal);
  return plainDate.year;
}
