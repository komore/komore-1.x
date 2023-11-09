import { defer, distinctUntilChanged, fromEvent, map, shareReplay, startWith, type Observable } from '@komore/reactive';

/**
 * Location observable
 */
export const location: Observable<Location> = defer(() => fromEvent<PopStateEvent>(window, 'popstate')).pipe(
  map(popState => {
    // TODO: remove log
    console.log('popstate', popState);
    return window.location;
  }),
  startWith(window.location),
  distinctUntilChanged(),
  shareReplay({ bufferSize: 1, refCount: false })
);
