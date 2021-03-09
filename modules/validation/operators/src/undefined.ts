import type { OperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is undefined
 */
export function _undefined(): OperatorFunction<unknown, undefined> {
  return constraint((value): value is undefined => value === undefined, 'undefined');
}
