import { isDefined } from '@komore/functional';
import { map, throwUnless } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CliRouter } from './cli-router';
import { type CliRouterOptions } from './cli-router-options';
import { cliParametersToCliRouteParameters } from './parameter/cli-parameters-to-cli-route-parameters';
import { type GenericCliRouteDefinition } from './definition/generic-cli-route-definition';
import { commandLineToCliRouteDefinition } from './parameter/command-line-to-cli-route-definition';

/**
 * Creates a command-line interface router
 *
 * @param routeDefinitions
 * @param options
 * @returns Command-line interface router
 */
export function createCliRouter<RouteDefinitions extends ReadonlyRecord<string, GenericCliRouteDefinition>>(
  routeDefinitions: RouteDefinitions,
  options: CliRouterOptions
): CliRouter<ReturnType<NonNullable<RouteDefinitions[keyof RouteDefinitions]['command']>>> {
  const {} = options;
  const toRouteDefinition = commandLineToCliRouteDefinition(routeDefinitions);
  return commandLine =>
    toRouteDefinition(commandLine).pipe(
      map(routeDefinition => routeDefinition.command),
      throwUnless(isDefined, () => new Error(`oopsie no command creator found for "eh need the path here"`)),
      map(commandCreator => {
        const routeParameters = cliParametersToCliRouteParameters(commandLine);
        return commandCreator(routeParameters);
      }),
      map(command => command as ReturnType<NonNullable<RouteDefinitions[keyof RouteDefinitions]['command']>>)
    );
}
