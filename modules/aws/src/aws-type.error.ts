import { createErrorType, errorProperties } from '@komore/error';

import { awsDomain } from './aws.domain';

/**
 * AWS type error
 */
export const awsTypeError = createErrorType(awsDomain, {
  /**
   * Invalid ARN
   */
  invalidArn: errorProperties<{
    /**
     * ARN
     */
    readonly arn: string;
  }>(),
  /**
   * Invalid region
   */
  invalidRegion: errorProperties<{
    /**
     * Region
     */
    readonly region: string;
  }>(),
});
