import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a string that is at least a minimum length
 * @param minimum Minimum string length
 */
export function minimumLength(minimum: number): MonoTypeOperatorFunction<string> {
  return constraint(value => minimum <= value.length, 'string.length.minimum', { minimum });
}
