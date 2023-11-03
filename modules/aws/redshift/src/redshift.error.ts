import { createErrorType } from '@komore/error';

import { redshiftDomain } from './redshift.domain';

/**
 * Redshift error
 */
export const redshiftError = createErrorType(redshiftDomain, {});
