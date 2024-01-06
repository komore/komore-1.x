import { createErrorType, errorProperties } from '@komore/error';

import { runtimeDomain } from './runtime.domain';

/**
 * Runtime error
 */
export const runtimeError = createErrorType(runtimeDomain, {
  /**
   * Assertion failed
   */
  assertionFailed: errorProperties<{
    /**
     * Assertion message
     */
    readonly message: string;
  }>(),
});
