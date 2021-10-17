import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { skipUntil } from '@komore/reactive/operators';

export function skipUntilStartup<T>(): MonoTypeOperatorFunction<T> {
  return skipUntil()
}
