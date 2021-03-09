import { string } from './string';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a string that is not longer than a maximum length
 */
export function maximumLength(maximum: number): MonoTypeOperatorFunction<string> {
  return constraint(value => value.length <= maximum, 'string.length.maximum', { maximum });
}
