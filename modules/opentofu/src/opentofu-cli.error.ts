import { createErrorType, errorProperties } from '@komore/error';

import { openTofuDomain } from './opentofu.domain';

/**
 * OpenTofu CLI error
 */
export const openTofuCliError = createErrorType(openTofuDomain, {
  /**
   * Not found
   */
  notFound: errorProperties(),
  /**
   * Unhandled error
   */
  unhandledError: errorProperties<{
    /**
     * Message
     */
    readonly message: string;
  }>(),
});
