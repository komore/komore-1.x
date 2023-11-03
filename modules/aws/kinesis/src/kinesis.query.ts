import { createAwsQueryType } from '@komore/aws';

import { kinesisDomain } from './kinesis.domain';

/**
 * Kinesis query
 */
export const kinesisQuery = createAwsQueryType(kinesisDomain, {});
