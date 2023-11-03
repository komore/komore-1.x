import { createErrorType } from '@komore/error';

import { cloudWatchDomain } from './cloudwatch.domain';

/**
 * CloudWatch error
 */
export const cloudWatchError = createErrorType(cloudWatchDomain, {});
