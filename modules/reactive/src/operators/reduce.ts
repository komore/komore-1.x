import { reduce as rxjsReduce } from 'rxjs';
import { type OperatorFunction } from '../operator-function';

/**
 * Applies an accumulator function over the source observable, and returns the accumulated result when the source
 * completes
 * @param accumulator Accumulator function
 */
export function reduce<T, A = T>(
  accumulator: (accumulated: A | T, value: T, index: number) => A
): OperatorFunction<T, A | T>;

/**
 * Applies an accumulator function over the source observable, and returns the accumulated result when the source
 * completes, given an initial seed value
 * @param accumulator Accumulator function
 * @param seed Initial accumulation value
 */
export function reduce<T, A>(
  accumulator: (accumulated: A, value: T, index: number) => A,
  seed: A
): OperatorFunction<T, A>;
export function reduce<T, A, S = A>(
  accumulator: (accumulated: A | S, value: T, index: number) => A,
  seed: S
): OperatorFunction<T, A>;

export function reduce<T, A>(
  accumulator: (accumulated: A | T, value: T, index: number) => A,
  seed?: unknown
): OperatorFunction<T, A | T> {
  return rxjsReduce(accumulator, seed as A);
}
