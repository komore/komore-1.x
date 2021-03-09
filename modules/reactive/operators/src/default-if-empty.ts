import type { OperatorFunction } from '@komore/reactive';
import { defaultIfEmpty as rxjsDefaultIfEmpty } from 'rxjs/operators';

/**
 * Emits a value if the source observable completes without emitting any value
 * @template T Value type
 * @template R Default value type
 */
export function defaultIfEmpty<T, R>(defaultValue: R): OperatorFunction<T, T | R> {
  return rxjsDefaultIfEmpty<T, R>(defaultValue);
}
