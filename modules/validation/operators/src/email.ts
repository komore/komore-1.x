import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

export function email(): MonoTypeOperatorFunction<string> {
  const emailRegExp = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
  return constraint((value: string) => emailRegExp.test(value), 'string.email');
}
