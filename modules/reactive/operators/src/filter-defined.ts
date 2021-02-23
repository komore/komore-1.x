import type { OperatorFunction } from '@komore/reactive';
import { filter } from './filter';

export function filterDefined<T>(): OperatorFunction<T | undefined, T> {
  return filter((value: T | undefined): value is T => value !== undefined);
}
