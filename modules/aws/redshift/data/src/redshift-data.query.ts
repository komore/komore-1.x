import { createAwsQueryType } from '@komore/aws';

import { redshiftDataDomain } from './redshift-data.domain';

/**
 * Redshift Data query
 */
export const redshiftDataQuery = createAwsQueryType(redshiftDataDomain, {});
