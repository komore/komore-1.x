import { fromEvent, map } from '@komore/reactive';

// TODO: remove this
declare const self: ServiceWorkerGlobalScope;

/**
 * Returns an observable that emits push events received by the service worker
 *
 * @returns Observable that emits push events received by the service worker
 */
export function fromWebPush(): Observable<PushEvent> {
  return fromEvent(self, 'push').pipe(map(event => event as PushEvent));
}
