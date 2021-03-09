import { defer, fromEvent, merge } from '@komore/reactive';
import { mapTo, shareReplay, startWith } from '@komore/reactive/operators';

/**
 * Online status
 */
export const ONLINE = defer(() => {
  const offline = fromEvent(window, 'offline').pipe(mapTo(false));
  const online = fromEvent(window, 'online').pipe(mapTo(true));
  const currentStatus = navigator.onLine;
  return merge([offline, online]).pipe(startWith(currentStatus));
}).pipe(shareReplay({ bufferSize: 1, refCount: true }));
