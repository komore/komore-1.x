import { forkJoin as rxjsForkJoin } from 'rxjs';
import { type Observable } from '../observable';
import { type ObservableTuple } from '../observable-tuple';
import { type ObservableType } from '../observable-type';

/**
 * Waits for each observable in the list to complete, then emits the last value from each observable
 */
export function forkJoin<T extends ReadonlyArray<unknown>>(sources: readonly [...ObservableTuple<T>]): Observable<T>;

/**
 * Waits for each observable in the dictionary to complete, then emits the last value from each observable
 */
export function forkJoin<T extends Record<string, Observable<unknown>>>(
  sources: T
): Observable<{ [K in keyof T]: ObservableType<T[K]> }>;

export function forkJoin(
  sources: ReadonlyArray<Observable<unknown>> | Record<string, Observable<unknown>>
): Observable<unknown> {
  return rxjsForkJoin((sources as unknown) as ReadonlyArray<Observable<unknown>>);
}
