import { isDefined } from '@komore/functional';
import { concatMap, filter, first, fromArray, map } from '@komore/reactive';

import { type CliRouter } from './cli-router';
import { type CliRouterOptions } from './cli-router-options';
import { cliParametersToStructuredCliParameters } from './route/cli-parameters-to-structured-cli-parameters';
import { type GenericCliRouteMatcher } from './route/generic-cli-route-matcher';
import { routeMatcherToRouteMatcherWithParameters } from './route/route-matcher-to-route-matcher-with-parameters';

/**
 * Creates a command-line interface router
 *
 * @param routeMatchers Route matchers
 * @param options Command-line interface router options
 * @returns Command-line interface router
 */
export function createCliRouter<RouteMatchers extends ReadonlyArray<GenericCliRouteMatcher>>(
  routeMatchers: RouteMatchers,
  options: CliRouterOptions
): CliRouter<ReturnType<RouteMatchers[number]['parametersToCommand']>> {
  const {} = options;
  return commandLine$ => {
    console.log('yay?');
    return commandLine$.pipe(
      map(cliParametersToStructuredCliParameters),
      concatMap(([pathParameters, flagParameters, commandLine]) => {
        console.log('yay', pathParameters, flagParameters, commandLine);
        return fromArray(routeMatchers).pipe(
          map(routeMatcherToRouteMatcherWithParameters(pathParameters, flagParameters)),
          filter(isDefined),
          first(),
          map(([routeMatcher, routeParameters]) => routeMatcher.parametersToCommand(routeParameters, commandLine)),
          map(command => command as ReturnType<RouteMatchers[number]['parametersToCommand']>)
        );
      })
    );
  };
}
