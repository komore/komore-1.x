import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { shareReplay } from './share-replay';

export function cache<T>(): MonoTypeOperatorFunction<T> {
  return shareReplay({
    bufferSize: 1,
    refCount: false
  });
}
