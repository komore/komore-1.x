import { type Route } from './route';

/**
 * Route with an element
 * @template ElementType Element type
 */
export interface RouteWithElement<ElementType extends Element> extends Route {
  /**
   * Element factory responsible for creating an element instance
   * @returns Element instance
   */
  readonly elementFactory: () => ElementType;
}
