import { concat as rxjsConcat } from 'rxjs';
import type { Observable } from '../observable/observable';
import type { ObservableInputTuple } from '../observable/observable-input-tuple';

/**
 * Creates an observable that sequentially emits all values from an observable until completion, then moves on to the
 * next observable
 * @param sources Source observables
 * @returns Observable that emits each value emitted by each observable, sequentially
 * @template T Observable value types
 */
export function concat<T extends ReadonlyArray<unknown>>(
  sources: readonly [...ObservableInputTuple<T>]
): Observable<T[number]> {
  return rxjsConcat(...sources);
}
