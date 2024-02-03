import { nowFor } from '../now-for';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal with date occurs during this century
 *
 * @param temporal Temporal
 * @returns true if the temporal occurs during this century
 */
export function isThisCentury(temporal: TemporalWithDate | Temporal.PlainYearMonth): boolean {
  const now = nowFor(temporal);
  const thisCentury = Math.ceil(now.year / 100);
  const temporalCentury = Math.ceil(temporal.year / 100);
  return temporalCentury === thisCentury;
}
