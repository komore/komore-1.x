import type { MonoTypeOperatorFunction } from '@komore/reactive';
import type { PartialObserver } from 'rxjs';
import { tap as rxjsTap } from 'rxjs';

/**
 * Performs side-effects based on notifications from the source observable
 * @param observer Observer
 * @param T Value type
 */
export function tap<T>(observer: PartialObserver<T>): MonoTypeOperatorFunction<T> {
  return rxjsTap(observer);
}
