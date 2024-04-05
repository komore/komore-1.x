import { createErrorType } from '@komore/error';

import { cloudWatchDomain } from './cloudwatch.domain';

/**
 * CloudWatch API error
 */
export const cloudWatchApiError = createErrorType(cloudWatchDomain, {});
