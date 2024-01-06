import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { shareReplay } from './share-replay';

/**
 * Caches the source so that the last value is replayed
 *
 * @returns Operator function that caches the source value
 * @template T Value type
 */
export function cache<T>(): MonoTypeOperatorFunction<T> {
  return shareReplay({
    bufferSize: 1,
    refCount: false,
  });
}
