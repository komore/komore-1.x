import { createErrorType } from '@komore/error';

import { cloudWatchLogsDomain } from './cloudwatch-logs.domain';

/**
 * CloudWatch Logs type error
 */
export const cloudWatchLogsTypeError = createErrorType(cloudWatchLogsDomain, {});
