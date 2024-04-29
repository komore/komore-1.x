import { comprehendDomain } from '@komore/aws/comprehend';
import { createErrorType } from '@komore/error';

/**
 * Comprehend error
 */
export const comprehendError = createErrorType(comprehendDomain, {});
