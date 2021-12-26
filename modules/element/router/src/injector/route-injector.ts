import { type RouteWithElement } from '../route/route-with-element';

/**
 * Route injector
 */
export interface RouteInjector {
  <ElementType extends Element>(route: RouteWithElement<ElementType>): void;
}
