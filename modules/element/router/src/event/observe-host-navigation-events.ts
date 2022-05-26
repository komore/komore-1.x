import { map, type Observable } from '@komore/reactive';
import { LOCATION } from '@komore/element';
import { type RouterNavigationEvent } from './router-navigation-event';
import { toRouterNavigationEvent } from './to-router-navigation-event';

/**
 * Observes host navigation events
 * @returns Stream of host-triggered navigation events
 */
export function observeHostNavigationEvents(): Observable<RouterNavigationEvent> {
  // TODO: replace with https://github.com/WICG/navigation-api
  return LOCATION.pipe(
    map(location => location.pathname),
    map(toRouterNavigationEvent('host', 'start'))
  );
}
