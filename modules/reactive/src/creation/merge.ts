import { merge as rxjsMerge } from 'rxjs';
import { type Observable } from '../observable';
import { type ObservableInputTuple } from '../observable-input-tuple';

/**
 * Creates an output observable that concurrently emits all values from all source observables
 * @param sources Source observables
 * @param concurrent Maximum number of concurrently subscribed observables, default to no maximum
 * @returns Observable that concurrently emits all values from all the source observables
 */
export function merge<T extends ReadonlyArray<unknown>>(
  sources: [...ObservableInputTuple<T>],
  concurrent?: number
): Observable<T[number]> {
  return concurrent !== undefined
    ? rxjsMerge(...sources, concurrent)
    : rxjsMerge(...sources)
  ;
}
