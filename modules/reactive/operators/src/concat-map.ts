import type { ObservableInput, ObservableInputType, OperatorFunction } from '@komore/reactive';
import { concatMap as rxjsConcatMap } from 'rxjs/operators';

/**
 * Projects each source value to an observable which is merged into the output observable
 *
 * Values get emitted from projected observables are serialized, emitting all values from a projected observable until
 * it completes before emitting values from the next observable.
 * @param project Projection function
 * @template T Value type
 * @template O Observable input type
 */
export function concatMap<T, O extends ObservableInput<unknown>>(
  project: (value: T, index: number) => O
): OperatorFunction<T, ObservableInputType<O>> {
  return rxjsConcatMap(project);
}
