import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a temporal that occurs one year before the passed temporal at the same date and time
 * @param temporal Temporal
 * @returns Temporal that occurs one year before `temporal`
 */
export function toPrecedingYear<T extends TemporalWithDate | Temporal.PlainYearMonth>(temporal: T): T {
  return temporal.subtract({ years: 1 }) as T;
}
