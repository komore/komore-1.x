import { type GenericCommand } from '@komore/command';
import { isDefined } from '@komore/functional';
import { filter, first, fromArray, map } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CliRouter } from './cli-router';
import { type CliRouterOptions } from './cli-router-options';
import { type CliFlagParameterDefinition } from './definition/parameter/cli-flag-parameter-definition';
import { type CliPathParameterDefinition } from './definition/parameter/cli-path-parameter-definition';
import { type CliRouteMatcher } from './route/cli-route-matcher';
import { cliParametersToStructuredCliParameters } from './route/cli-parameters-to-structured-cli-parameters';

/**
 * Creates a command-line interface router
 *
 * @param routeMatchers Route matchers
 * @param options Command-line interface router options
 * @returns Command-line interface router
 */
export function createCliRouter<
  RouteMatchers extends ReadonlyArray<
    CliRouteMatcher<
      ReadonlyRecord<string, CliPathParameterDefinition<unknown, boolean>>,
      ReadonlyRecord<string, CliFlagParameterDefinition<unknown, boolean>>,
      GenericCommand
    >
  >,
>(
  routeMatchers: RouteMatchers,
  options: CliRouterOptions
): CliRouter<ReturnType<RouteMatchers[number]['parametersToCommand']>> {
  const {} = options;
  return commandLine => {
    const [pathParameters, flagParameters] = cliParametersToStructuredCliParameters(commandLine);
    return fromArray(routeMatchers).pipe(
      map(routeMatcherToRouteMatcherWithParameters(pathParameters, flagParameters)),
      filter(isDefined),
      first(),
      map(([routeMatcher, routeParameters]) => routeMatcher.parametersToCommand(routeParameters, commandLine)),
      map(command => command as ReturnType<RouteMatchers[number]['parametersToCommand']>)
    );
  };
}

function routeMatcherToRouteMatcherWithParameters(
  pathParameters: ReadonlyArray<string>,
  flagParameters: ReadonlyRecord<string, string>
): <
  T extends CliRouteMatcher<
    ReadonlyRecord<string, CliPathParameterDefinition<unknown, boolean>>,
    ReadonlyRecord<string, CliFlagParameterDefinition<unknown, boolean>>,
    GenericCommand
  >,
>(
  routeMatcher: T
) => readonly [routeMatcher: T, routeParameters: NonNullable<ReturnType<T['commandLineToParameters']>>] | undefined {
  return <
    T extends CliRouteMatcher<
      ReadonlyRecord<string, CliPathParameterDefinition<unknown, boolean>>,
      ReadonlyRecord<string, CliFlagParameterDefinition<unknown, boolean>>,
      GenericCommand
    >,
  >(
    routeMatcher: T
  ) => {
    const { commandLineToParameters } = routeMatcher;
    const routeParameters = commandLineToParameters(pathParameters, flagParameters) as ReturnType<
      T['commandLineToParameters']
    >;
    console.log('hm', routeParameters);
    return routeParameters !== undefined ? [routeMatcher, routeParameters] : undefined;
  };
}
