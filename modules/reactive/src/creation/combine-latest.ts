import { combineLatest as rxjsCombineLatest } from 'rxjs';
import type { Observable } from '../observable';
import type { ObservableInputTuple, ObservableInputType } from '../observable-input';

/**
 * TODO
 * @param sources 
 */
export function combineLatest<T extends ReadonlyArray<unknown>>(
  sources: readonly [...ObservableInputTuple<T>]
): Observable<T>;

/**
 * TODO
 * @param sources 
 */
export function combineLatest<T>(sources: T): Observable<{ [K in keyof T]: ObservableInputType<T[K]> }>;

export function combineLatest(
  sources: ReadonlyArray<Observable<unknown>> | Record<string, Observable<unknown>>
): Observable<unknown> {
  return rxjsCombineLatest(sources);
}
