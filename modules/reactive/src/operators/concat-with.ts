import { concatWith as rxjsConcatWith } from 'rxjs';
import type { ObservableInputTuple } from '../observable/observable-input-tuple';
import type { OperatorFunction } from '../operator/operator-function';

/**
 * TODO
 * @param sources 
 * @returns 
 */
export function concatWith<T, A extends readonly unknown[]>(
  ...sources: [...ObservableInputTuple<A>]
): OperatorFunction<T, T | A[number]> {
  return rxjsConcatWith(...sources);
}
