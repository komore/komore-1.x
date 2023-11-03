import { createErrorType } from '@komore/error';

import { translateDomain } from './translate.domain';

/**
 * Translate error
 */
export const translateError = createErrorType(translateDomain, {});
