import { pairwise as rxjsPairwise } from 'rxjs';
import type { OperatorFunction } from '../operator/operator-function';

export function pairwise<T>(): OperatorFunction<T, [previous: T, value: T]> {
  return rxjsPairwise();
}
