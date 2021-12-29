import { type OperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a string
 */
export function string(): OperatorFunction<unknown, string> {
  return constraint((value): value is string => typeof value === 'string', 'string');
}
