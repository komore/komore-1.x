import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';
import { withTemporalWithDate } from '../with-temporal-with-date';

/**
 * Creates a function that adds months to a temporal with date
 * @param months Number of months to add
 * @returns Function that adds `months` months to a temporal
 */
export function addMonths(months: number): <T extends TemporalWithDate | TemporalWithPartialDate>(temporal: T) => T {
  return temporal => withTemporalWithDate(temporal, t => t.add({ months }));
}
