import type { Route } from './route';
import type { RouteWithElement } from './route-with-element';

/**
 * Potential route with element
 * @template ElementType Element type
 */
type PotentialRouteWithElement<ElementType extends Element> = {
  readonly elementFactory?: RouteWithElement<ElementType>['elementFactory'];
};

/**
 * Tests whether a route is a route with an element
 * @param route Route
 * @returns true if the route is a route with an element
 * @template ElementType Element type
 */
export function isRouteWithElement<ElementType extends Element = Element>(
  route: Route
): route is RouteWithElement<ElementType> {
  const potentialRouteWithElement = route as unknown as PotentialRouteWithElement<ElementType>;
  return potentialRouteWithElement.elementFactory !== undefined;
}
