import { createErrorType, errorProperties } from '@komore/error';

import { esLintDomain } from './eslint.domain';

/**
 * ESLint error
 */
export const esLintError = createErrorType(esLintDomain, {
  /**
   * ESLint configuration extend file not found
   *
   * @see `extend-config-missing`
   */
  configExtendFileNotFound: errorProperties<{ extendPath: string }>(),
  /**
   * Unhandled internal ESLint error
   */
  unhandledError: errorProperties<{ message: string; errorId: string }>(),
});
