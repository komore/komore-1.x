import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

export function pattern(regExp: RegExp): MonoTypeOperatorFunction<string> {
  return constraint((value: string) => regExp.test(value), 'string.regexp');
}
