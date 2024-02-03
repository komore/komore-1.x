import { nowFor } from '../now-for';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a temporal that occurs next year at the same date and time as the passed temporal
 *
 * @param temporal Temporal
 * @returns Temporal that occurs at the same time next year
 */
export function toSameDateNextYear<T extends TemporalWithDate | Temporal.PlainYearMonth>(temporal: T): T {
  const now = nowFor(temporal);
  return temporal.with({ year: now.year + 1 }) as T;
}
