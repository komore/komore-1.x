import { type BrowserRouteInjector } from './injector/browser-route-injector';

/**
 * Browser router options
 */
export interface BrowserRouterOptions {
  /**
   * Injector
   */
  readonly injector: BrowserRouteInjector;
  /**
   * Navigation interface
   *
   * @note Defaults to the window's navigation interface
   */
  readonly navigation?: Navigation;
}
