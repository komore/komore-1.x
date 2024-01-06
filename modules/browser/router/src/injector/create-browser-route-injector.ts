import { type BrowserRouteInjector } from './browser-route-injector';
import { type BrowserRouteInjectorOptions } from './browser-route-injector-options';

/**
 * Creates a browser route injector
 *
 * @param injectorOptions Browser route injector options
 * @returns Route injector
 */
export function createBrowserRouteInjector(injectorOptions: BrowserRouteInjectorOptions): BrowserRouteInjector {
  const { injectionPoint, injectionType } = injectorOptions;
  return route => {
    const element = route.elementFactory();
    injectionPoint[injectionType](element);
  };
}
