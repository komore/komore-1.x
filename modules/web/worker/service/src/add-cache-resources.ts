import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive';

export function addCacheResources(cache: Cache, resources: ReadonlyArray<RequestInfo>): Observable<void> {
  return deferPromise(() => cache.addAll([...resources]));
}
