import { adyenDomain } from '@komore/adyen';
import { createErrorType } from '@komore/error';

/**
 * Adyen error
 */
export const adyenError = createErrorType(adyenDomain, {});
