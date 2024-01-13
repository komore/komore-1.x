import { createErrorType, errorProperties } from '@komore/error';

import { functionDomain } from './function.domain';

/**
 * Function error
 */
export const functionError = createErrorType(functionDomain, {
  /**
   * The function has already completed
   */
  completed: errorProperties<{
    /**
     * Function name
     */
    readonly functionName: string;
    /**
     * Function parameters
     */
    readonly functionParameters: ReadonlyArray<unknown>;
  }>(),
});
