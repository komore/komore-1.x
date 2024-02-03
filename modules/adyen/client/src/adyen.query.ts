import { adyenDomain } from '@komore/adyen';
import { createQueryType } from '@komore/query';

/**
 * Adyen query
 */
export const adyenQuery = createQueryType(adyenDomain, {});
