import type { OperatorFunction } from '@komore/reactive';
import { scan as rxjsScan } from 'rxjs';

/**
 * Applies an accumulator function over the source observable, and returns the accumulated result each time the source
 * emits
 * @param accumulator Accumulator function
 */
export function scan<T, A = T>(
  accumulator: (accumulated: A | T, value: T, index: number) => A
): OperatorFunction<T, A | T>;

/**
 * Applies an accumulator function over the source observable, and returns the accumulated result each time the source
 * emits, given an initial seed value
 * @param accumulator Accumulator function
 * @param seed Initial accumulation value
 */
export function scan<T, A>(
  accumulator: (accumulated: A, value: T, index: number) => A,
  seed: A
): OperatorFunction<T, A>;
export function scan<T, A, S = A>(
  accumulator: (accumulated: A | S, value: T, index: number) => A,
  seed: S
): OperatorFunction<T, A>;

export function scan<T, A>(
  accumulator: (accumulated: A | T, value: T, index: number) => A,
  seed?: unknown
): OperatorFunction<T, A | T> {
  return rxjsScan(accumulator, seed as A);
}
