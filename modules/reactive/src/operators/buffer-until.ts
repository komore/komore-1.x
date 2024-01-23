import { buffer } from 'rxjs';

import { type Observable } from '../observable';
import { type OperatorFunction } from '../operator-function';

export function bufferUntil<T>(closingNotifier: Observable<never>): OperatorFunction<T, never>;
export function bufferUntil<T>(closingNotifier: Observable<unknown>): OperatorFunction<T, ReadonlyArray<T>>;

export function bufferUntil<T>(closingNotifier: Observable<unknown>): OperatorFunction<T, ReadonlyArray<T>> {
  return buffer(closingNotifier);
}
