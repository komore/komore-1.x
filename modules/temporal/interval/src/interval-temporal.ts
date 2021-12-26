import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate, type TemporalWithTime } from '@komore/temporal';

/**
 * Interval temporal
 */
export type IntervalTemporal = TemporalWithDate | TemporalWithTime | Temporal.PlainYearMonth | Temporal.PlainMonthDay;
