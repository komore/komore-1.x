import { sesDomain } from '@komore/aws/ses';
import { createErrorType } from '@komore/error';

/**
 * SES error
 */
export const sesError = createErrorType(sesDomain, {});
