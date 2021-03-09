import type { OperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is true
 */
export function _true(): OperatorFunction<boolean, true> {
  return constraint((value): value is true => value === true, 'boolean.true');
}
