import type { OperatorFunction } from '@komore/reactive';
import { mapTo as rxjsMapTo } from 'rxjs/operators';

/**
 * Emits the given value whenever the source observable emits a value
 * @param value Value to emit
 * @template T Value type
 */
export function mapTo<T>(value: T): OperatorFunction<unknown, T> {
  return rxjsMapTo(value);
}
