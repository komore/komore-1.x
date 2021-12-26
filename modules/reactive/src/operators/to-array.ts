import { reduce } from './reduce';
import { type OperatorFunction } from '../operator-function';

/**
 * Collects all emitted values from a source and emits them as an array when the source completes
 * @template T Value type
 */
export function toArray<T>(): OperatorFunction<T, ReadonlyArray<T>> {
  return reduce((acc, value) => {
    acc.push(value);
    return acc;
  }, [] as Array<T>);
}
