import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { map } from './map';
import { type RetryOptions } from './retry-options';

export function retryIf<T>(
  _condition: (error: unknown) => boolean,
  _options?: Partial<RetryOptions>
): MonoTypeOperatorFunction<T> {
  //const _count = options?.count;
  //const _resetOnSuccess = options?.resetOnSuccess ?? true;
  // TODO
  return map(x => x);
}
