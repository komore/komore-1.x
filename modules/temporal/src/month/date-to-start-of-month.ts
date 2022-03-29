import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a temporal that occurs at the end the month, given another temporal
 * @param temporal Temporal
 * @returns Temporal occuring at the end of the same month
 */
export function dateToStartOfMonth<T extends TemporalWithDate | Temporal.PlainMonthDay>(temporal: T): T {
  return temporal.with({ day: 1 }) as T;
}
