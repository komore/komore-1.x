import { createErrorType } from '@komore/error';

import { eToroDomain } from './etoro.domain';

/**
 * eToro error
 */
export const eToroError = createErrorType(eToroDomain, {});
