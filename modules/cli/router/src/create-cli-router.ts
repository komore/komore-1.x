import { of, throwError } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CliRouter } from './cli-router';
import { type CliRouterOptions } from './cli-router-options';
import { type GenericCliRouteDefinition } from './generic-cli-route-definition';
import { objectToEntries } from '@komore/functional';

export function createCliRouter<RouteDefinitions extends ReadonlyRecord<string, GenericCliRouteDefinition>>(
  routeDefinitions: RouteDefinitions,
  options: CliRouterOptions
): CliRouter<ReturnType<NonNullable<RouteDefinitions[keyof RouteDefinitions]['command']>>> {
  const { logger: _ } = options;
  return parameters => {
    console.log('woohoo', parameters, 'route def', routeDefinitions);
    const routeDefinitionEntry = objectToEntries(routeDefinitions).find(([path]) => path === parameters[0]);
    if (routeDefinitionEntry === undefined) {
      console.log('no command found', parameters.join(' '));
      return throwError(() => new Error(`oopsie no command found`));
    }

    const [path, routeDefinition] = routeDefinitionEntry;
    console.log(`found route def at "${path}"`, routeDefinition);
    const { command: commandCreator } = routeDefinition;
    if (commandCreator === undefined) {
      console.log('no command creator found', parameters.join(' '));
      return throwError(() => new Error(`oopsie no command creator found for "${path}"`));
    }

    const command = commandCreator() as ReturnType<NonNullable<RouteDefinitions[keyof RouteDefinitions]['command']>>;

    return of(command);
  };
}
