import { isDefined, objectWithProperties } from '@komore/functional';
import { distinctUntilChanged, filter, fromEvent, map, shareReplay, startWith, tapNext } from '@komore/reactive';

import { type BrowserRouter } from './browser-router';
import { type BrowserRouterOptions } from './browser-router-options';
import { navigateEventToRouterNavigationEvent } from './event/navigate-event-to-router-navigation-event';
import { isNavigateEventBrowserRouterRelevant } from './is-navigate-event-browser-router-relevant';
import { type BrowserRouterNavigationOptions } from './navigate/browser-router-navigation-options';

/**
 * Creates a browser router
 *
 * @param routerOptions Browser router options
 * @returns Router
 */
export function createBrowserRouter(routerOptions: BrowserRouterOptions): BrowserRouter {
  const { injector: _injector, navigation = window.navigation } = routerOptions;
  if (navigation === undefined) {
    throw new Error('Navigation API not supported');
  }

  const navigateBackward = () => navigation.back();
  const navigateForward = () => navigation.forward();
  const reload = () => navigation.reload();

  fromEvent(navigation, 'navigate').pipe(
    map(event => event as NavigateEvent),
    filter(isNavigateEventBrowserRouterRelevant),
    map(navigateEventToRouterNavigationEvent('host', 'start'))
  );
  const navigateSuccess$ = fromEvent(navigation, 'navigatesuccess').pipe(
    tapNext(ev => console.log('navigate success', ev)),
    shareReplay({ refCount: true })
  );
  const canNavigateForward$ = navigateSuccess$.pipe(
    map(() => navigation.canGoForward),
    startWith(navigation.canGoForward),
    distinctUntilChanged()
  );
  const canNavigateBackward$ = navigateSuccess$.pipe(
    map(() => navigation.canGoBack),
    startWith(navigation.canGoBack),
    distinctUntilChanged()
  );
  const currentUrl$ = navigateSuccess$.pipe(
    map(() => navigation.currentEntry?.url ?? undefined),
    filter(isDefined),
    map(url => new URL(url)),
    distinctUntilChanged()
  );

  function browserRouter(path: string, navigationOptions?: BrowserRouterNavigationOptions): void {
    console.log(`gotta route to ${path}`, navigationOptions);
  }

  return objectWithProperties(
    {
      canNavigateBackward$,
      canNavigateForward$,
      currentUrl$,
      navigateBackward,
      navigateForward,
      reload,
    },
    {
      configurable: false,
      enumerable: false,
      writable: false,
    }
  )(browserRouter);
}
