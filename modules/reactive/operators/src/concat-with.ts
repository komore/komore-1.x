import type { ObservableInputTuple, OperatorFunction } from '@komore/reactive';
import { concatWith as rxjsConcatWith } from 'rxjs';

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
