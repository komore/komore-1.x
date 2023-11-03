import { createAwsQueryType } from '@komore/aws';

import { neptuneDomain } from './neptune.domain';

/**
 * Neptune query
 */
export const neptuneQuery = createAwsQueryType(neptuneDomain, {});
