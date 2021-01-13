import type { Route } from './route';

/**
 * Router options
 */
export interface RouterOptions {
  readonly routes: ReadonlyArray<Route>;
}
