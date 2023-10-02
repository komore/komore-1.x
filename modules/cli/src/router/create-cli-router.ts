import { of } from '@komore/reactive';

import { type CliRouter } from './cli-router';
import { type GenericCliRouteDefinition } from './generic-cli-route-definition';

export function createCliRouter<RouteDefinitions extends ReadonlyArray<GenericCliRouteDefinition>>(
  ..._routeDefinitions: RouteDefinitions
): CliRouter {
  return () => of(0);
}
