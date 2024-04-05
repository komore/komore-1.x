import { cloudWatchLogsDomain } from '@komore/aws/cloudwatch/logs';
import { createQueryType } from '@komore/query';

/**
 * CloudWatch Logs query
 */
export const cloudWatchLogsQuery = createQueryType(cloudWatchLogsDomain, {});
