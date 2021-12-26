import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from './temporal-with-date-time';

/**
 * Temporal with date
 */
export type TemporalWithDate = TemporalWithDateTime | Temporal.PlainDate;
