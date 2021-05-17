import type { TemporalWithTime } from '../temporal-with-time';

export function atMidnight<T extends TemporalWithTime>(temporal: T): T {
  return temporal;
}
