import { type RouteWithElement } from '../route/route-with-element';

/**
 * Browser route injector
 */
export interface BrowserRouteInjector {
  <ElementType extends Element>(route: RouteWithElement<ElementType>): void;
}
