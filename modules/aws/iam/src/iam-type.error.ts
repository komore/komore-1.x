import { createErrorType, errorProperties } from '@komore/error';

import { iamDomain } from './iam.domain';

/**
 * IAM type error
 */
export const iamTypeError = createErrorType(iamDomain, {
  /**
   * Invalid ARN
   */
  invalidArn: errorProperties<{
    /**
     * ARN
     */
    readonly arn: string;
  }>(),
});
