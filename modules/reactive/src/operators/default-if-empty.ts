import { defaultIfEmpty as rxjsDefaultIfEmpty } from 'rxjs';
import type { OperatorFunction } from '../operator/operator-function';

/**
 * Emits a value if the source observable completes without emitting any value
 * @param defaultValue Default value
 * @template T Value type
 * @template R Default value type
 */
export function defaultIfEmpty<T, R>(defaultValue: R): OperatorFunction<T, T | R> {
  return rxjsDefaultIfEmpty<T, R>(defaultValue);
}
