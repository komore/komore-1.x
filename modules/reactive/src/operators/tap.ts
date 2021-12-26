import { tap as rxjsTap } from 'rxjs';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type Observer } from '../observer';

/**
 * Performs side-effects based on notifications from the source observable
 * @param observer Observer
 * @param T Value type
 */
export function tap<T>(observer: Observer<T>): MonoTypeOperatorFunction<T> {
  return rxjsTap(observer);
}
