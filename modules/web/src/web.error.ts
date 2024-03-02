import { createErrorType, errorProperties } from '@komore/error';

import { webDomain } from './web.domain';

/**
 * Web error
 */
export const webError = createErrorType(webDomain, {
  /**
   * Invalid data URL
   */
  invalidDataUrl: errorProperties<{
    /**
     * URL
     */
    readonly url: string;
  }>(),
});
