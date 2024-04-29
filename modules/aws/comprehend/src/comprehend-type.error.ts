import { createErrorType } from '@komore/error';

import { comprehendDomain } from './comprehend.domain';

/**
 * Comprehend type error
 */
export const comprehendTypeError = createErrorType(comprehendDomain, {});
