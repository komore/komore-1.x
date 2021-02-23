import type { OperatorFunction } from '@komore/reactive';
import { toArray as rxjsToArray } from 'rxjs/operators';

/**
 * Collects all emitted values from a source and emits them as an array when the source completes
 * @template T Value type
 */
export function toArray<T>(): OperatorFunction<T, ReadonlyArray<T>> {
  return rxjsToArray<T>();
}
