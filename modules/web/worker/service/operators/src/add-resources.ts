import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { mapTo, mergeMap } from '@komore/reactive/operators';
import { fromPromise } from '@komore/reactive/promise';

/**
 * Adds resources to a cache
 * @param resources Resources
 * @returns TODO
 */
export function addResources(resources: ReadonlyArray<RequestInfo>): MonoTypeOperatorFunction<Cache> {
  return mergeMap(cache => fromPromise(cache.addAll([...resources])).pipe(mapTo(cache)));
}
