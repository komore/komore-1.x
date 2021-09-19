import type { RouteInjectionOptions } from './route-injection-options';
import type { RouteInjector } from './route-injector';

/**
 * Creates a route injector
 * @param options Route injection options
 * @returns Route injector
 */
export function createRouteInjector(options: RouteInjectionOptions): RouteInjector {
  const { injectionPoint, injectionType } = options;
  return route => {
    const element = route.elementFactory();
    injectionPoint[injectionType](element);
  };
}
