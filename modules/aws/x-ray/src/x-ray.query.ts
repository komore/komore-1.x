import { createAwsQueryType } from '@komore/aws';

import { xRayDomain } from './x-ray.domain';

/**
 * X-Ray query
 */
export const xRayQuery = createAwsQueryType(xRayDomain, {});
