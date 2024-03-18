import { share as rxjsShare } from 'rxjs';

import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type ShareOptions } from './share-options';

/**
 * Returns a new observable that shares the original observable
 *
 * @template T Value type
 */
export function share<T>(config: ShareOptions<T>): MonoTypeOperatorFunction<T> {
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
