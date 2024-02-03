import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithPartialDate } from '../temporal-with-partial-date';
import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that tests whether a temporal with date and time occurs earlier than a reference temporal with
 * date and time
 *
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal with date and time occurs earlier than the reference temporal with date and time
 */
export function isEarlierThan<T extends TemporalWithDate | TemporalWithTime | TemporalWithPartialDate>(
  referenceTemporal: T
): (temporal: T) => boolean {
  if (referenceTemporal instanceof Temporal.PlainMonthDay || referenceTemporal instanceof Temporal.PlainYearMonth) {
    const referenceDate = asPlainDate(referenceTemporal);
    return ((temporal: TemporalWithPartialDate) => referenceDate.until(asPlainDate(temporal)).sign < 0) as (
      temporal: T
    ) => boolean;
  }

  return temporal => referenceTemporal.until(temporal).sign < 0;
}
