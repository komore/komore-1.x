import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { filter } from './filter';

/**
 * Skips the first `count` values emitted by the source observable
 * @param count Number of emitted values that should be skipped
 * @template T Value type
 */
export function skip<T>(count: number): MonoTypeOperatorFunction<T> {
  return filter((_, index) => count <= index);
}
