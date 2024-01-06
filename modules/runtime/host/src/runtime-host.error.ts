import { createErrorType, errorProperties } from '@komore/error';

import { runtimeHostDomain } from './runtime-host.domain';

/**
 * Runtime host error
 */
export const runtimeHostError = createErrorType(runtimeHostDomain, {
  /**
   * Unhandled error
   */
  unhandled: errorProperties<{
    /**
     * Error message
     */
    readonly message: string;
    /**
     * Source information
     */
    readonly source: {
      /**
       * Column number
       */
      readonly column: number;
      /**
       * Line number
       */
      readonly line: number;
      /**
       * Source name
       */
      readonly name: string;
    };
    /**
     * Error thrown by the host
     */
    readonly thrownError: Error;
  }>(),
});
