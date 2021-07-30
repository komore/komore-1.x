import { getNowFor } from '@komore/temporal';
import type { TemporalWithDate } from '../temporal-with-date';

export function isLastWeekEnd(temporal: TemporalWithDate): boolean {
  const now = getNowFor(temporal);
  const lastWeek = getLastWeek();
}
