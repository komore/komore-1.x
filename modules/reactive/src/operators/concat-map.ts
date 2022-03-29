import { type Observable } from '../observable';
import { type OperatorFunction } from '../operator-function';
import { mergeMap } from './merge-map';

/**
 * Projects each source value to an observable which is merged into the output observable
 *
 * Values get emitted from projected observables are serialized, emitting all values from a projected observable until
 * it completes before emitting values from the next observable.
 * @param project Projection function
 * @template T Value type
 * @template O Observable input type
 */
export function concatMap<T, U>(project: (value: T, index: number) => Observable<U>): OperatorFunction<T, U> {
  return mergeMap(project, 1);
}
