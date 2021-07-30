import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { takeLast as rxjsTakeLast } from 'rxjs';

/**
 * Waits for the source observable to complete, then emits the last `count` values emitted by the source
 * @param count Maximum number of values to emit from the end of the sequence
 * @template T Value type
 */
export function takeLast<T>(count: number): MonoTypeOperatorFunction<T> {
  return rxjsTakeLast<T>(count);
}
