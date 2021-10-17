import type { OperatorFunction } from '@komore/reactive';
import { filter } from './filter';

/**
 * Filters defined values emitted by the source observable
 * @template T Value type
 */
export function filterDefined<T>(): OperatorFunction<T | undefined, T> {
  return filter((value: T | undefined): value is T => value !== undefined);
}
