import { createErrorType, errorProperties } from '@komore/error';

import { poetryDomain } from './poetry.domain';

/**
 * Poetry CLI error
 */
export const poetryCliError = createErrorType(poetryDomain, {
  /**
   * Version parsing failed
   */
  versionParsingFailed: errorProperties<{
    /**
     * CLI version output
     */
    readonly cliVersion: string;
  }>(),
});
