import { createErrorType, errorProperties } from '@komore/error';

import { functionDomain } from './function.domain';

/**
 * Function error
 */
export const functionError = createErrorType(functionDomain, {
  /**
   * The observable has completed, effectively preventing further invocations
   */
  observableCompleted: errorProperties<{
    /**
     * Function name
     */
    readonly functionName: string;
    /**
     * Function parameters
     */
    readonly functionParameters: ReadonlyArray<unknown>;
  }>(),
  /**
   * The observable has errored, effectively preventing further invocations
   */
  observableError: errorProperties<{
    /**
     * Error
     */
    readonly error: unknown;
    /**
     * Function name
     */
    readonly functionName: string;
  }>(),
});
