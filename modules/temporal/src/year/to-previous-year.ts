import type { Temporal } from 'proposal-temporal';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a temporal that occurs one year before the passed temporal
 * @param temporal Temporal
 * @returns Temporal that occurs one year before `temporal`
 */
export function toPreviousYear<T extends TemporalWithDate | Temporal.PlainYearMonth>(temporal: T): T {
  return temporal.subtract({ years: 1 }) as T;
}
