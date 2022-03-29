import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a temporal that occurs one year after the passed temporal at the same date and time
 * @param temporal Temporal
 * @returns Temporal that occurs one year after `temporal`
 */
export function dateToFollowingYear<T extends TemporalWithDate | Temporal.PlainYearMonth>(temporal: T): T {
  return temporal.add({ years: 1 }) as T;
}
