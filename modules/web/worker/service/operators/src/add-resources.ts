import { fromPromise, mapTo, mergeMap, type MonoTypeOperatorFunction } from '@komore/reactive';

/**
 * Adds resources to a cache
 * @param resources Resources
 * @returns TODO
 */
export function addResources(resources: ReadonlyArray<RequestInfo>): MonoTypeOperatorFunction<Cache> {
  return mergeMap(cache => fromPromise(cache.addAll([...resources])).pipe(mapTo(cache)));
}
