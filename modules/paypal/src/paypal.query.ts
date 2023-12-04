import { createQueryType } from '@komore/query';

import { payPalDomain } from './paypal.domain';

/**
 * PayPal query
 */
export const payPalQuery = createQueryType(payPalDomain, {});
