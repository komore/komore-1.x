import { type Temporal } from '@js-temporal/polyfill';
import { asPlainDate } from '../as-plain-date';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Creates a function that tests whether a temporal occurs on a different, earlier day than another temporal
 * @param referenceTemporal Temporal reference point
 * @returns Function that returns true if `earlierTemporal` occurs on a different, earlier day than `referenceTemporal`
 */
export function isEarlierDayThan(
  referenceTemporal: TemporalWithDate | Temporal.PlainMonthDay
): (earlierTemporal: TemporalWithDate | Temporal.PlainMonthDay) => boolean {
  const referencePd = asPlainDate(referenceTemporal);
  return earlierTemporal => {
    const earlierPd = asPlainDate(earlierTemporal);
    const yearDifference = earlierPd.year - referencePd.year;
    const earlierYear = yearDifference < 0;
    const sameYear = yearDifference === 0;
    return earlierYear || (sameYear && earlierPd.dayOfYear < referencePd.dayOfYear);
  };
}
