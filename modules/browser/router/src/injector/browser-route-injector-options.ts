import { type BrowserRouteInjectionType } from './browser-route-injection-type';

/**
 * Browser route injector options
 */
export interface BrowserRouteInjectorOptions {
  readonly injectionPoint: Element;
  readonly injectionType: BrowserRouteInjectionType;
}
