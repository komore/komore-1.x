import { map, type MonoTypeOperatorFunction } from '@komore/reactive';
import { type RouterNavigationEvent } from '../event/router-navigation-event';
import { type Route } from '../route/route';

export function matchRoute(route: Route): MonoTypeOperatorFunction<RouterNavigationEvent> {
  return map(event => )
}
