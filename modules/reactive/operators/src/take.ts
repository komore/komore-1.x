import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { take as rxjsTake } from 'rxjs/operators';

/**
 * Emits the first `count` values emitted by the source observable
 * @param count Number of values to emit
 * @template T Value type
 */
export function take<T>(count: number): MonoTypeOperatorFunction<T> {
  return rxjsTake(count);
}
