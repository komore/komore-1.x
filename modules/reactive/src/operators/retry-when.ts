import { type Observable } from '../observable';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { map } from './map';
import { type RetryOptions } from './retry-options';

export function retryWhen2<T>(
  _retry: (error: unknown) => Observable<unknown>,
  _options?: RetryOptions
): MonoTypeOperatorFunction<T> {
  //const _count = options?.count;
  //const _resetOnSuccess = options?.resetOnSuccess;
  // TODO
  return map(x => x);
}
