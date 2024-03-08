import { createErrorType } from '@komore/error';

import { sesDomain } from './ses.domain';

/**
 * SES API error
 */
export const sesApiError = createErrorType(sesDomain, {});
