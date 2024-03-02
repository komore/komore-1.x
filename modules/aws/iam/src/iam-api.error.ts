import { createErrorType } from '@komore/error';

import { iamDomain } from './iam.domain';

/**
 * IAM API error
 */
export const iamApiError = createErrorType(iamDomain, {});
