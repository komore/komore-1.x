import { type Observable } from '@komore/reactive';

import { type BrowserRouterNavigationOptions } from './navigate/browser-router-navigation-options';

/**
 * Browser router
 */
export interface BrowserRouter {
  readonly canNavigateBackward$: Observable<boolean>;
  readonly canNavigateForward$: Observable<boolean>;
  readonly currentUrl$: Observable<URL>;

  /**
   * Navigates to a specific path
   *
   * @param path Path
   * @param navigationOptions Navigation options
   */
  (path: string, navigationOptions?: BrowserRouterNavigationOptions): void;

  /**
   * Navigates backward
   */
  navigateBackward(): void;
  /**
   * Navigates forward
   */
  navigateForward(): void;
  /**
   * Reload the current route
   */
  reload(): void;
}
