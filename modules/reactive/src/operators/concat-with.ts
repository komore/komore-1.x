import { concatWith as rxjsConcatWith } from 'rxjs';

import { type ObservableTuple } from '../observable-tuple';
import { type OperatorFunction } from '../operator-function';

/**
 * Emits all the values from the source observable until it completes, then subscribes to each passed observable until
 * it completes, one at a time
 *
 * @param sources List of observables
 * @template T Source observable value type
 * @template A Additional source observable value types
 */
export function concatWith<T, A extends ReadonlyArray<unknown>>(
  sources: readonly [...ObservableTuple<A>]
): OperatorFunction<T, T | A[number]> {
  return rxjsConcatWith(sources);
}
