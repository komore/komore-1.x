import { createErrorType } from '@komore/error';

import { sendGridDomain } from './sendgrid.domain';

/**
 * SendGrid API error
 */
export const sendGridApiError = createErrorType(sendGridDomain, {});
