import { type RouteInjectionType } from './route-injection-type';

/**
 * Router injection options
 */
export interface RouteInjectionOptions {
  readonly injectionPoint: Element;
  readonly injectionType: RouteInjectionType;
}
