import { createErrorType, errorProperties } from '@komore/error';

import { kinesisDomain } from './kinesis.domain';

/**
 * Kinesis type error
 */
export const kinesisTypeError = createErrorType(kinesisDomain, {
  /**
   * Invalid stream name
   */
  invalidStreamName: errorProperties<{
    /**
     * Stream name
     */
    readonly streamName: string;
  }>(),
});
