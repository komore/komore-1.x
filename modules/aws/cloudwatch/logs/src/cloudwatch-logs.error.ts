import { createErrorType } from '@komore/error';

import { cloudWatchLogsDomain } from './cloudwatch-logs.domain';

/**
 * CloudWatch Logs error
 */
export const cloudWatchLogsError = createErrorType(cloudWatchLogsDomain, {});
