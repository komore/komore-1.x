import { defer, fromEvent, map, type Observable, shareReplay, startWith } from '@komore/reactive';

/**
 * Location observable
 */
export const LOCATION: Observable<Location> = defer(() => fromEvent<PopStateEvent>(window, 'popstate')).pipe(
  map(popState => {
    console.log('popstate', popState);
    return window.location;
  }),
  startWith(window.location),
  shareReplay({ bufferSize: 1, refCount: false })
);
