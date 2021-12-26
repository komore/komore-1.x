import { type OperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a boolean
 */
export function boolean(): OperatorFunction<unknown, boolean> {
  return constraint((value): value is boolean => typeof value === 'boolean', 'boolean');
}
