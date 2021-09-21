import type { Observable } from '@komore/reactive';
import { defer, fromEvent } from '@komore/reactive';
import { distinctUntilChanged, map, shareReplay, startWith } from '@komore/reactive/operators';

/**
 * Location observable
 */
export const LOCATION: Observable<Location> = defer(() => fromEvent<PopStateEvent>(window, 'popstate')).pipe(
  map(popState => {
    console.log('popstate', popState);
    return window.location;
  }),
  startWith(window.location),
  distinctUntilChanged(),
  shareReplay({ bufferSize: 1, refCount: false })
);
