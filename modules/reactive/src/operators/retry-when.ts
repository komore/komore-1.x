import { type Observable } from '../observable';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type RetryOptions } from './retry-options';

export function retryWhen<T>(
  retry: (error: unknown) => Observable<unknown>,
  options?: RetryOptions
): MonoTypeOperatorFunction<T> {}
