import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive';

export function openCache(cacheName: string): Observable<Cache> {
  return deferPromise(() => caches.open(cacheName));
}
