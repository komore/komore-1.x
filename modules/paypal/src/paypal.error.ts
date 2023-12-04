import { createErrorType } from '@komore/error';

import { payPalDomain } from './paypal.domain';

/**
 * PayPal error
 */
export const payPalError = createErrorType(payPalDomain, {});
