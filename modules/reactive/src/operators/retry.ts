import { retry as rxjsRetry } from 'rxjs';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type RetryOptions } from './retry-options';

export function retry<T>(options?: RetryOptions): MonoTypeOperatorFunction<T> {
  if (options !== undefined) {
    return rxjsRetry(options);
  } else {
    return rxjsRetry();
  }
}
