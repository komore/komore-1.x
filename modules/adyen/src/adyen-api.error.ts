import { createErrorType } from '@komore/error';

import { adyenDomain } from './adyen.domain';

/**
 * Adyen API error
 */
export const adyenApiError = createErrorType(adyenDomain, {});
