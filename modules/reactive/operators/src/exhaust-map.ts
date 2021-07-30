import type { ObservableInput, ObservableInputType, OperatorFunction } from '@komore/reactive';
import { exhaustMap as rxjsExhaustMap } from 'rxjs';

/**
 * Projects each source value to an observable which is merged into the output observable
 *
 * Values only get emitted from the most recently projected observable until it completes.
 * @param project Projection function
 * @template T Value type
 * @template O Observable input type
 */
export function exhaustMap<T, O extends ObservableInput<unknown>>(
  project: (value: T, index: number) => O
): OperatorFunction<T, ObservableInputType<O>> {
  return rxjsExhaustMap(project);
}
