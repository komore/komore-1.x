import type { Temporal } from 'proposal-temporal';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a temporal that occurs one year after the passed temporal
 * @param temporal Temporal
 * @returns Temporal that occurs one year after `temporal`
 */
export function toNextYear<T extends TemporalWithDate | Temporal.PlainYearMonth>(temporal: T): T {
  return temporal.add({ years: 1 }) as T;
}
