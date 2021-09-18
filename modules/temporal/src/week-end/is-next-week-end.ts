import { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate } from '../temporal-with-date';

export function isNextWeekEnd(temporal: TemporalWithDate): boolean {
  const now = Temporal.Now.plainDateISO();
  return temporal.year === now.year && temporal.weekOfYear === (now.weekOfYear % 53) + 1;
}
