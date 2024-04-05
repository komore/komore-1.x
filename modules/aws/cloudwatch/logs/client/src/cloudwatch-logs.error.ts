import { cloudWatchLogsDomain } from '@komore/aws/cloudwatch/logs';
import { createErrorType } from '@komore/error';

/**
 * CloudWatch Logs error
 */
export const cloudWatchLogsError = createErrorType(cloudWatchLogsDomain, {});
