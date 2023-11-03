import { createAwsQueryType } from '@komore/aws';

import { pollyDomain } from './polly.domain';

/**
 * Polly query
 */
export const pollyQuery = createAwsQueryType(pollyDomain, {});
