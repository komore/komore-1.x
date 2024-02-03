import { combineLatest as rxjsCombineLatest } from 'rxjs';

import { type ReadonlyRecord } from '@komore/typescript';

import { type ObservableTuple } from '../observable-tuple';
import { type ObservableType } from '../observable-type';

/**
 * TODO
 * @param sources Empty list of sources
 * @returns Observable that never emits or completes
 */
export function combineLatest(sources: readonly []): Observable<never>;

/**
 * TODO
 * @param sources List of sources
 * @returns
 */
export function combineLatest<T extends ReadonlyArray<unknown>>(
  sources: readonly [...ObservableTuple<T>]
): Observable<T>;

/**
 * TODO
 * @param sources Empty dictionary of sources
 * @returns Observable that never emits or completes
 */
export function combineLatest(sources: ReadonlyRecord<string, never>): Observable<never>;

/**
 * TODO
 * @param sources Dictionary of sources
 * @returns
 */
export function combineLatest<T extends ReadonlyRecord<string, Observable<unknown>>>(
  sources: T
): Observable<{ [K in keyof T]: ObservableType<T[K]> }>;

export function combineLatest(
  sources: ReadonlyArray<Observable<unknown>> | ReadonlyRecord<string, Observable<unknown>>
): Observable<unknown> {
  return rxjsCombineLatest(sources as unknown as ReadonlyArray<Observable<unknown>>);
}
