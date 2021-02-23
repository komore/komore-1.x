import { forkJoin as rxjsForkJoin } from 'rxjs';
import type { Observable } from '../observable';
import type { ObservableInputTuple, ObservableInputType } from '../observable-input';

/**
 * Waits for each observable in the list to complete, then emits the last value from each observable
 *
 * Differences with RxJS' forkJoin:
 * - no deprecated signatures available
 * - emits an empty list given an empty list of observables
 */
export function forkJoin<T extends ReadonlyArray<unknown>>(
  sources: readonly [...ObservableInputTuple<T>]
): Observable<T>;

/**
 * Waits for each observable in the dictionary to complete, then emits the last value from each observable
 *
 * Differences with RxJS' forkJoin:
 * - no deprecated signatures available
 * - emits an empty dictionary given an empty dictionary of observables
 */
export function forkJoin<T>(sources: T): Observable<{ [K in keyof T]: ObservableInputType<T[K]> }>;

export function forkJoin(
  sources: ReadonlyArray<Observable<unknown>> | Record<string, Observable<unknown>>
): Observable<unknown> {
  return rxjsForkJoin(sources);
}
