import { exhaustMap as rxjsExhaustMap } from 'rxjs';
import { type Observable } from '../observable';
import { type OperatorFunction } from '../operator-function';

/**
 * Projects each source value to an observable which is merged into the output observable
 *
 * Values only get emitted from the most recently projected observable until it completes.
 * @param project Projection function
 * @template T Value type
 * @template U Observable value type
 */
export function exhaustMap<T, U>(project: (value: T, index: number) => Observable<U>): OperatorFunction<T, U> {
  return rxjsExhaustMap(project);
}
