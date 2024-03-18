import { createErrorType, errorProperties } from '@komore/error';

import { gitDomain } from './git.domain';

/**
 * Git CLI error
 */
export const gitCliError = createErrorType(gitDomain, {
  /**
   * Unknown option
   */
  unknownOption: errorProperties<{
    /**
     * Option
     */
    readonly option: string;
  }>(),
  /**
   * Unhandled error
   */
  unhandledError: errorProperties<{
    /**
     * Error message
     */
    readonly message: string;
  }>(),
  unsupportedVersionResult: errorProperties<{
    /**
     * Version line
     */
    readonly versionLine: string;
  }>(),
});
