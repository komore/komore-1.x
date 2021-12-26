import { type Temporal } from '@js-temporal/polyfill';
import { getNowFor } from '../get-now-for';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a temporal that occurs next year at the same date and time as the passed temporal
 * @param temporal Temporal
 * @returns Temporal that occurs at the same time next year
 */
export function toNextYear<T extends TemporalWithDate | Temporal.PlainYearMonth>(temporal: T): T {
  const now = getNowFor(temporal);
  return temporal.with({ year: now.year + 1 }) as T;
}
