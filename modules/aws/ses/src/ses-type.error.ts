import { createErrorType } from '@komore/error';

import { sesDomain } from './ses.domain';

/**
 * SES type error
 */
export const sesTypeError = createErrorType(sesDomain, {});
