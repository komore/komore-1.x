import { createQueryType } from '@komore/query';

import { adyenDomain } from './adyen.domain';

/**
 * Adyen query
 */
export const adyenQuery = createQueryType(adyenDomain, {});
