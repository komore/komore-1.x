import { createErrorType } from '@komore/error';

import { sesDomain } from './ses.domain';

/**
 * SES error
 */
export const sesError = createErrorType(sesDomain, {});
