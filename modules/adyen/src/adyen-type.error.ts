import { createErrorType } from '@komore/error';

import { adyenDomain } from './adyen.domain';

/**
 * Adyen type error
 */
export const adyenTypeError = createErrorType(adyenDomain, {});
