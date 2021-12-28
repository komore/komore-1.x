import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';
import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Interval temporal
 */
export type IntervalTemporal = TemporalWithDate | TemporalWithTime | Temporal.PlainYearMonth | Temporal.PlainMonthDay;
