import { combineLatest as rxjsCombineLatest } from 'rxjs';
import type { Observable } from '../observable/observable';
import type { ObservableTuple } from '../observable/observable-tuple';
import type { ObservableType } from '../observable/observable-type';

/**
 * TODO
 * @param sources
 */
export function combineLatest<T extends ReadonlyArray<unknown>>(
  sources: readonly [...ObservableTuple<T>]
): Observable<T>;

/**
 * TODO
 * @param sources
 */
export function combineLatest<T extends Record<string, Observable<unknown>>>(
  sources: T
): Observable<{ [K in keyof T]: ObservableType<T[K]> }>;

export function combineLatest(
  sources: ReadonlyArray<Observable<unknown>> | Record<string, Observable<unknown>>
): Observable<unknown> {
  return rxjsCombineLatest((sources as unknown) as ReadonlyArray<Observable<unknown>>);
}
