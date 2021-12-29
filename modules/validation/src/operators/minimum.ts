import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value equal or higher than a minimum
 * @param minimum Minimum value to compare with
 * @note This operator implicitly applies the numeric constraint
 */
export function minimum(minimum: number): MonoTypeOperatorFunction<number> {
  return constraint(value => minimum <= value, 'numeric.minimum', { minimum });
}
