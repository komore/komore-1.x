import { createErrorType } from '@komore/error';

import { sendGridDomain } from './sendgrid.domain';

/**
 * SendGrid error
 */
export const sendGridError = createErrorType(sendGridDomain, {});
