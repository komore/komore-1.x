import { createErrorType } from '@komore/error';

import { sendGridDomain } from './sendgrid.domain';

/**
 * SendGrid type error
 */
export const sendGridTypeError = createErrorType(sendGridDomain, {});
