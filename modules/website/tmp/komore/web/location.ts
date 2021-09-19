import type { Observable } from 'rxjs';
import { defer, fromEvent } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs';

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
