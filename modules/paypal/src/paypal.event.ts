import { createEventType } from '@komore/event';

import { payPalDomain } from './paypal.domain';

/**
 * PayPal event
 */
export const payPalEvent = createEventType(payPalDomain, {});
