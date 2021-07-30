import type { MonoTypeOperatorFunction, OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import { convertTimeZone, Instant, TimeZone } from '@komore/temporal';
import { parseTimeZone } from '@komore/temporal';
import { InstantWithTimeZone } from 'modules/temporal/src/time-zone/instant-with-time-zone';

/**
 * Emits a time zone converted instant whenever the source observable emits
 * @param timeZone Time zone
 * @returns Operator function that emits a instant converted to the specified time zone whenever an instant is emitted
 * @template T Instant type
 */
export function mapToTimeZone<T extends Instant>(timeZone: TimeZone): OperatorFunction<T, >;

export function mapToTimeZone<T extends InstantWithTimeZone>(timeZone: TimeZone): MonoTypeOperatorFunction<T> {
  return map(instant => convertTimeZone(instant, timeZone));
}

export function mapToTimeZone<T extends Instant>(timeZoneOrId: TimeZone | string): MonoTypeOperatorFunction<T> {
  const timeZone = typeof timeZoneOrId === 'string' ? parseTimeZone
}
