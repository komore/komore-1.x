import { merge, Observable } from '@komore/reactive';
import { createRouterNavigationEventSource } from './event/create-router-navigation-event-source';
import { type RouterNavigationEvent } from './event/router-navigation-event';
import { observeHostNavigationEvents } from './event/observe-host-navigation-events';
import { type Router } from './router';
import { type RouterOptions } from './router-options';

/**
 * Creates a router
 * @param options Router options
 * @returns Router
 */
export function createRouter(
  project: (events: Observable<RouterNavigationEvent>) => Observable<RouterNavigationEvent>,
  _options: RouterOptions
): Observable<Router> {
  return new Observable<Router>(subscriber => {
    const [routerSubject, routerNavigationEvents] = createRouterNavigationEventSource();
    const hostNavigationEvents = observeHostNavigationEvents();
    const router: Router = path => routerSubject.next(path);
    const events = merge([routerNavigationEvents, hostNavigationEvents]);
    const projectedEvents = project(events);
    subscriber.add(projectedEvents.subscribe());
    subscriber.next(router);
  });
}
