import { pairwise as rxjsPairwise } from 'rxjs';
import { type OperatorFunction } from '../operator-function';

/**
 * Groups pairs of consecutive emissions together and emits them as a tuple made of the previous and current values
 *
 * @returns Operator function that groups pairs of consecutive emissions together
 * @template T Value type
 */
export function pairwise<T>(): OperatorFunction<T, readonly [previous: T, value: T]> {
  return rxjsPairwise();
}
