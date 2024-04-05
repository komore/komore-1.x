import { createErrorType } from '@komore/error';

import { cloudWatchLogsDomain } from './cloudwatch-logs.domain';

/**
 * CloudWatch Logs API error
 */
export const cloudWatchLogsApiError = createErrorType(cloudWatchLogsDomain, {});
