import { getCurrentLocalDateTime } from '../get-current-local-date-time';
import type { LocalDateTime } from '../local-date-time';
import { getEndOfDay } from './get-end-of-day';

export function getEndOfToday(): LocalDateTime {
  return getEndOfDay(getCurrentLocalDateTime());
}
