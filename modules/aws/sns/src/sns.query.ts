import { createAwsQueryType } from '@komore/aws';

import { snsDomain } from './sns.domain';

/**
 * SNS query
 */
export const snsQuery = createAwsQueryType(snsDomain, {});
