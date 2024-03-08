import { createErrorType } from '@komore/error';

import { kmsDomain } from './kms.domain';

/**
 * KMS type error
 */
export const kmsTypeError = createErrorType(kmsDomain, {});
