import { tap as rxjsTap } from 'rxjs';
import type { PartialObserver } from '../observer/partial-observer';
import type { MonoTypeOperatorFunction } from '../operator/mono-type-operator-function';

/**
 * Performs side-effects based on notifications from the source observable
 * @param observer Observer
 * @param T Value type
 */
export function tap<T>(observer: PartialObserver<T>): MonoTypeOperatorFunction<T> {
  return rxjsTap(observer);
}
