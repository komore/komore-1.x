import { createAwsQueryType } from '@komore/aws';

import { lambdaDomain } from './lambda.domain';

/**
 * Lambda query
 */
export const lambdaQuery = createAwsQueryType(lambdaDomain, {});
