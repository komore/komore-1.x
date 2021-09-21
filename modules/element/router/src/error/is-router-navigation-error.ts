import { RouterNavigationError } from './router-navigation-error';

/**
 * Tests whether an error is a router navigation error
 * @param error Error
 * @returns true if the error is a router navigation error
 */
export function isRouterNavigationError(error: Error): error is RouterNavigationError {
  return error instanceof RouterNavigationError;
}
