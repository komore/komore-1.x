import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type RetryOptions } from './retry-options';

export function retryIf<T>(
  condition: (error: unknown) => boolean,
  options?: Partial<RetryOptions>
): MonoTypeOperatorFunction<T> {
  const count = options?.count;
  const resetOnSuccess = options?.resetOnSuccess ?? true;
}
