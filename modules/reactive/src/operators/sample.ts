import { sample as rxjsSample } from 'rxjs';

import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';

/**
 * Emits the most recently emitted value from the source observable whenever the `notifier` emits
 * @param notifier Notifier observable
 * @template T Value type
 */
export function sample<T>(notifier: Observable<unknown>): MonoTypeOperatorFunction<T> {
  return rxjsSample<T>(notifier);
}
