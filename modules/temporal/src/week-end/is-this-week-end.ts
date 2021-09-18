import { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate } from '../temporal-with-date';
import { isWeekEnd } from './is-week-end';

export function isThisWeekEnd(temporal: TemporalWithDate): boolean {
  if (!isWeekEnd(temporal)) {
    return false;
  }
  const now = Temporal.Now.plainDateISO();
  return temporal.year === now.year && temporal.weekOfYear === now.weekOfYear;
}
