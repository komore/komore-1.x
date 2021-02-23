import { fromEvent, merge, Observable } from 'rxjs';
import { map, shareReplay } from '@komore/reactive/operators';

/**
 * Location observable
 */
export const LOCATION: Observable<Location> = merge(
  fromEvent<PageTransitionEvent>(window, 'pageshow').pipe(
    map(pageTransition => {
      console.log('pageshow', pageTransition);
      return window.location;
    })
  ),
  fromEvent<PopStateEvent>(window, 'popstate').pipe(
    map(popState => {
      console.log('popstate', popState);
      return window.location;
    })
  )
).pipe(shareReplay({ bufferSize: 1, refCount: false }));
