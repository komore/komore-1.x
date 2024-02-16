import { buffer } from 'rxjs';

import { type OperatorFunction } from '../operator-function';

/**
 * TODO
 *
 * @param closingNotifier Closing notifier
 */
export function bufferUntil<T>(closingNotifier: Observable<never>): OperatorFunction<T, never>;

/**
 * TODO
 *
 * @param closingNotifier Closing notifier
 */
export function bufferUntil<T>(closingNotifier: Observable<unknown>): OperatorFunction<T, ReadonlyArray<T>>;

export function bufferUntil<T>(closingNotifier: Observable<unknown>): OperatorFunction<T, ReadonlyArray<T>> {
  return buffer(closingNotifier);
}
