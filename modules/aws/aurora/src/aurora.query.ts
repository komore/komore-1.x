import { createAwsQueryType } from '@komore/aws';

import { auroraDomain } from './aurora.domain';

/**
 * Aurora query
 */
export const auroraQuery = createAwsQueryType(auroraDomain, {});
