import { defer as rxjsDefer } from 'rxjs';
import type { Observable } from '../observable/observable';
import type { ObservableInput } from '../observable/observable-input';
import type { ObservableInputType } from '../observable/observable-input-type';

/**
 * Creates an observable that delegates the creation of a new observable to a factory
 * @param factory Factory that returns a new observable
 * @returns Observable
 * @template T Observable input type
 */
export function defer<T extends ObservableInput<unknown>>(factory: () => T): Observable<ObservableInputType<T>> {
  return rxjsDefer(factory);
}
