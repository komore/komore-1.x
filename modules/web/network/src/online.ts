import { defer, fromEvent, mapTo, merge, shareReplay, startWith } from '@komore/reactive';

/**
 * Online status
 */
export const online = defer(() => {
  const wentOffline = fromEvent(window, 'offline').pipe(mapTo(false));
  const wentOnline = fromEvent(window, 'online').pipe(mapTo(true));
  const currentStatus = navigator.onLine;
  return merge([wentOffline, wentOnline]).pipe(startWith(currentStatus));
}).pipe(shareReplay({ bufferSize: 1, refCount: true }));
