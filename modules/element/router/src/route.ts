// import { match } from 'path-to-regexp';

/**
 * Route
 */
export interface Route {
  readonly path?: string;
  readonly match?: RegExp;
  readonly redirectTo?: string;
};
