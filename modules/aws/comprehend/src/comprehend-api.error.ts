import { createErrorType } from '@komore/error';

import { comprehendDomain } from './comprehend.domain';

/**
 * Comprehend API error
 */
export const comprehendApiError = createErrorType(comprehendDomain, {});
