import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate, type TemporalWithTime } from '@komore/temporal';

/**
 * Interval
 * @template T Temporal type
 */
export interface Interval<
  T extends TemporalWithDate | TemporalWithTime | Temporal.PlainYearMonth | Temporal.PlainMonthDay
> {
  readonly start: T;
  readonly end: T;
}
