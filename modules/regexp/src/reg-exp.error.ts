import { createErrorType, errorProperties } from '@komore/error';

import { regExpDomain } from './reg-exp.domain';

/**
 * Regular expression error
 */
export const regExpError = createErrorType(regExpDomain, {
  /**
   * Invalid regular expression string
   */
  invalidRegExpString: errorProperties<{
    /**
     * Value
     */
    readonly value: string;
  }>(),
});
