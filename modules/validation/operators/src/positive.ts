import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a positive number
 */
export function positive(): MonoTypeOperatorFunction<number> {
  return constraint(value => 0 < value, 'numeric.positive');
}
