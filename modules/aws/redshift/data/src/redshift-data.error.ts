import { createErrorType } from '@komore/error';

import { redshiftDataDomain } from './redshift-data.domain';

/**
 * Redshift Data error
 */
export const redshiftDataError = createErrorType(redshiftDataDomain, {});
