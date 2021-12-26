import { exhaustMap as rxjsExhaustMap } from 'rxjs';
import { type ObservableInput } from '../observable-input';
import { type ObservableInputType } from '../observable-input-type';
import { type OperatorFunction } from '../operator-function';

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
