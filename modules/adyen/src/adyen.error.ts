import { createErrorType } from '@komore/error';
import { adyenDomain } from './adyen.domain';

/**
 * Adyen error
 */
export const adyenError = createErrorType(adyenDomain, {});
