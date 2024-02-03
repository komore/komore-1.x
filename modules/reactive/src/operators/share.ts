import { share as rxjsShare } from 'rxjs';

import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type Subject } from '../subject/subject';

/**
 * Returns a new observable that shares the original observable
 *
 * @template T Value type
 */
export function share<T>(config: ShareConfig<T>): MonoTypeOperatorFunction<T> {
  const { resetOn, ...otherProperties } = config;
  const resetOnError = resetOn?.error;
  const resetOnComplete = resetOn?.complete;
  const resetOnRefCountZero = resetOn?.refCountZero;
  return rxjsShare<T>({
    ...otherProperties,
    ...(resetOnComplete !== undefined ? { resetOnComplete } : {}),
    ...(resetOnError !== undefined ? { resetOnError } : {}),
    ...(resetOnRefCountZero !== undefined ? { resetOnRefCountZero } : {}),
  });
}

/**
 * Share operator configuration
 */
export interface ShareConfig<T> {
  connector?: () => Subject<T>;
  readonly resetOn?: {
    readonly complete?: boolean | (() => Observable<unknown>);
    readonly error?: boolean | ((error: unknown) => Observable<unknown>);
    readonly refCountZero?: boolean | (() => Observable<unknown>);
  };
}
