import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { filter } from '@komore/reactive/operators';

/**
 * Filters based on a message event's origin
 * @param originOrOrigins Origin or list of origins that are allowed
 * @template T Value type
 */
export function filterMessageEventOrigin<T extends MessageEvent<unknown>>(
  ...origins: ReadonlyArray<string>
): MonoTypeOperatorFunction<T> {
  return filter(event => origins.includes(event.origin));
}
