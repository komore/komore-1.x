import type { MonoTypeOperatorFunction } from '../operator/mono-type-operator-function';
import type { RetryOptions } from './retry-options';

export function retryIf<T>(condition: (error: unknown) => boolean, options?: RetryOptions): MonoTypeOperatorFunction<T> {

}
