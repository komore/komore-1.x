import { race as rxjsRace } from 'rxjs';
import type { Observable } from '../observable/observable';
import type { ObservableInputTuple } from '../observable/observable-input-tuple';

/**
 * Creates an observable that mirrors the first source observable to emit a value
 * @param inputs List of input observables
 * @returns Observable that mirrors the first source observable to emit a value
 */
export function race<A extends ReadonlyArray<unknown>>(inputs: [...ObservableInputTuple<A>]): Observable<A[number]> {
  return rxjsRace(inputs);
}
