import type { TemporalWithDate } from '../temporal-with-date';
import type { TemporalWithPartialDate } from '../temporal-with-partial-date';
import { withTemporalWithDate } from '../with-temporal-with-date';

/**
 * Creates a function that subtracts months from a temporal with date
 * @param months Number of months to subtract
 * @returns Function that subtracts `months` months from a temporal
 */
export function subtractMonths(
  months: number
): <T extends TemporalWithDate | TemporalWithPartialDate>(temporal: T) => T {
  return temporal => withTemporalWithDate(temporal, t => t.subtract({ months }));
}
