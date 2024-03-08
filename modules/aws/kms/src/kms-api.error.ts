import { createErrorType } from '@komore/error';

import { kmsDomain } from './kms.domain';

/**
 * KMS API error
 */
export const kmsApiError = createErrorType(kmsDomain, {});
