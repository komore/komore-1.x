import { type ReadonlyRecord } from '@komore/typescript';

import { type GenericCliRouteMatcher } from './generic-cli-route-matcher';

/**
 * Creates a function that returns a route matcher and its parameters
 *
 * If the route matcher is not applicable to the path and flag parameters, undefined is returned instead.
 *
 * @param pathParameters Path parameters
 * @param flagParameters Flag parameters
 * @returns Route matcher and its parameter, if applicable
 */
export function routeMatcherToRouteMatcherWithParameters(
  pathParameters: ReadonlyArray<string>,
  flagParameters: ReadonlyRecord<string, string>
): <T extends GenericCliRouteMatcher>(
  routeMatcher: T
) => readonly [routeMatcher: T, routeParameters: NonNullable<ReturnType<T['commandLineToParameters']>>] | undefined {
  return <T extends GenericCliRouteMatcher>(routeMatcher: T) => {
    type RouteParameters = ReturnType<T['commandLineToParameters']>;
    const { commandLineToParameters } = routeMatcher;
    const routeParameters = commandLineToParameters(pathParameters, flagParameters) as RouteParameters;
    return routeParameters !== undefined ? [routeMatcher, routeParameters] : undefined;
  };
}
