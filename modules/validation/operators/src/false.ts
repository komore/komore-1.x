import type { OperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

export function _false(): OperatorFunction<boolean, false> {
  return constraint((value): value is false => value === false, 'boolean.false');
}
