import { type GenericCommand } from '@komore/command';
import { of } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CliRouter } from './cli-router';
import { type GenericCliRouteDefinition } from './generic-cli-route-definition';

export function createCliRouter<RouteDefinitions extends ReadonlyRecord<string, GenericCliRouteDefinition>>(
  _routeDefinitions: RouteDefinitions
): CliRouter {
  return () => of(void 0 as unknown as GenericCommand);
}
