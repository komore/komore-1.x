import { createErrorType, errorProperties } from '@komore/error';

import { documentationDomain } from './documentation.domain';

/**
 * Documentation error
 */
export const documentationError = createErrorType(documentationDomain, {
  /**
   * Function documentation was not found
   */
  functionDocumentationNotFound: errorProperties<{
    /**
     * Function name
     */
    readonly functionName: string;
  }>(),
});
