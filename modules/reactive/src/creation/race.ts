import { race as rxjsRace } from 'rxjs';
import { type Observable } from '../observable';
import { type ObservableTuple } from '../observable-tuple';

/**
 * Creates an observable that mirrors the first source observable to emit a value
 * @param sources Empty list of source observables
 * @returns Observable that never emits or completes
 */
export function race(inputs: []): Observable<never>;

/**
 * Creates an observable that mirrors the first source observable to emit a value
 * @param sources List of source observables
 * @returns Observable that mirrors the first source observable to emit a value
 * @template A Array of observables type
 */
export function race<A extends ReadonlyArray<unknown>>(inputs: [...ObservableTuple<A>]): Observable<A[number]>;

export function race<A extends ReadonlyArray<unknown>>(sources: [...ObservableTuple<A>]): Observable<A[number]> {
  return rxjsRace(sources);
}
