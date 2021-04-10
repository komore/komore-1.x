import { forkJoin as rxjsForkJoin } from 'rxjs';
import type { Observable } from '../observable';
import type { ObservableTuple } from '../observable-tuple';
import type { ObservableType } from '../observable-type';

/**
 * Waits for each observable in the list to complete, then emits the last value from each observable
 *
 * Differences with RxJS' forkJoin:
 * - no deprecated signatures available
 * - emits an empty list given an empty list of observables
 */
export function forkJoin<T extends ReadonlyArray<unknown>>(
  sources: readonly [...ObservableTuple<T>]
): Observable<T>;

/**
 * Waits for each observable in the dictionary to complete, then emits the last value from each observable
 *
 * Differences with RxJS' forkJoin:
 * - no deprecated signatures available
 * - emits an empty dictionary given an empty dictionary of observables
 */
export function forkJoin<T extends Record<string, Observable<unknown>>>(sources: T): Observable<{ [K in keyof T]: ObservableType<T[K]> }>;

export function forkJoin(
  sources: ReadonlyArray<Observable<unknown>> | Record<string, Observable<unknown>>
): Observable<unknown> {
  return rxjsForkJoin(sources as unknown as ReadonlyArray<Observable<unknown>>);
}
