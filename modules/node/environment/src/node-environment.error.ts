import { createErrorType, errorProperties } from '@komore/error';
import { nodeDomain } from '@komore/node';

/**
 * Node environment error
 */
export const nodeEnvironmentError = createErrorType(nodeDomain, {
  /**
   * Missing variable name
   */
  missingVariable: errorProperties<{
    /**
     * Description
     */
    readonly description: string;
    /**
     * Name
     */
    readonly name: string;
  }>(),
});
