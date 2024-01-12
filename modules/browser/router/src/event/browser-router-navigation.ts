import { type BrowserRouterNavigationTrigger } from './browser-router-navigation-trigger';

/**
 * Browser router navigation
 */
export interface BrowserRouterNavigation {
  /**
   * Path
   */
  readonly path: string;
  /**
   * Trigger
   */
  readonly trigger: BrowserRouterNavigationTrigger;
}
