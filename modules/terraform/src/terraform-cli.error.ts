import { createErrorType, errorProperties } from '@komore/error';

import { terraformDomain } from './terraform.domain';

/**
 * Terraform CLI error
 */
export const terraformCliError = createErrorType(terraformDomain, {
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
