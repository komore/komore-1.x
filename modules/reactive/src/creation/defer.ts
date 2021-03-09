import type { Observable, ObservableInput, ObservedValueOf } from 'rxjs';
import { defer as rxjsDefer } from 'rxjs';

/**
 * Creates an observable that delegates the creation of a new observable to a factory
 * @param factory Factory that returns a new observable
 * @returns Observable
 * @template T Observable input type
 */
export function defer<T extends ObservableInput<unknown>>(factory: () => T): Observable<ObservedValueOf<T>> {
  return rxjsDefer(factory);
}
