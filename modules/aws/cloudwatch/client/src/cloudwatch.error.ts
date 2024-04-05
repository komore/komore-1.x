import { cloudWatchDomain } from '@komore/aws/cloudwatch';
import { createErrorType } from '@komore/error';

/**
 * CloudWatch error
 */
export const cloudWatchError = createErrorType(cloudWatchDomain, {});
