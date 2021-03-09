import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a negative number or zero
 * @note This operator implicitly applies the numeric constraint
 */
export function negativeOrZero(): MonoTypeOperatorFunction<number> {
  return constraint((value: number) => value <= 0, 'numeric.negative.zero');
}
