import { createCommandType } from '@komore/command';

import { payPalDomain } from './paypal.domain';

/**
 * PayPal command
 */
export const payPalCommand = createCommandType(payPalDomain, {});
