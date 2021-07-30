import type { MonoTypeOperatorFunction } from '@komore/reactive';
import type { Instant } from '@komore/temporal';
import { parseTimeZone } from '@komore/temporal';
import { mapToTimeZone } from './map-to-time-zone';

/**
 * Emits a time zone converted instant whenever the source observable emits
 * @param timeZone Time zone
 * @returns Operator function that emits a instant converted to the specified time zone whenever an instant is emitted
 * @template T Instant type
 */
export function mapToTimeZoneId<T extends Instant>(timeZoneId: string): MonoTypeOperatorFunction<T> {
  const timeZone = parseTimeZone(timeZoneId);
  return mapToTimeZone(timeZone);
}
