import { cloudWatchDomain } from '@komore/aws/cloudwatch';
import { createQueryType } from '@komore/query';

/**
 * CloudWatch query
 */
export const cloudWatchQuery = createQueryType(cloudWatchDomain, {});
