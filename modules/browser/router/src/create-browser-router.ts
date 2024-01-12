import { type ErrorFromType } from '@komore/error';
import { type EventFromType } from '@komore/event';
import { objectWithProperties } from '@komore/functional';
import { filter, fromEvent, map, Subject, tapNext } from '@komore/reactive';

import { type BrowserRouter } from './browser-router';
import { browserRouterError } from './browser-router.error';
import { type browserRouterEvent } from './browser-router.event';
import { type BrowserRouterOptions } from './browser-router-options';
import { isNavigateEventBrowserRouterRelevant } from './event/is-navigate-event-browser-router-relevant';
import { type BrowserRouterNavigationOptions } from './navigate/browser-router-navigation-options';
import { createBrowserRouterNavigationObservables } from './navigation/create-browser-router-navigation-observables';

/**
 * Creates a browser router
 *
 * @param routerOptions Browser router options
 * @returns Router
 */
export function createBrowserRouter(routerOptions: BrowserRouterOptions): BrowserRouter {
  const { injector: _injector, navigation = window.navigation } = routerOptions;
  if (navigation === undefined) {
    throw browserRouterError.unsupportedNavigationApi();
  }

  const navigationObservables = createBrowserRouterNavigationObservables(navigation);
  const navigateBackward = () => navigation.back();
  const navigateForward = () => navigation.forward();
  const reload = () => navigation.reload();
  const events = new Subject<EventFromType<typeof browserRouterEvent>>();
  const events$ = events.asObservable();
  const errors = new Subject<ErrorFromType<typeof browserRouterError>>();
  const errors$ = errors.asObservable();

  fromEvent(navigation, 'navigate')
    .pipe(
      map(event => event as NavigateEvent),
      filter(isNavigateEventBrowserRouterRelevant),
      tapNext(ev => console.log('relevant browser router event', ev))
    )
    .subscribe();

  function browserRouter(path: string, navigationOptions?: BrowserRouterNavigationOptions): void {
    console.log(`gotta route to ${path}`, navigationOptions);
  }

  return objectWithProperties(
    {
      ...navigationObservables,
      errors$,
      events$,
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
