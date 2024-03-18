import { createErrorType } from '@komore/error';

import { translateDomain } from './translate.domain';

/**
 * Translate API error
 */
export const translateApiError = createErrorType(translateDomain, {});
