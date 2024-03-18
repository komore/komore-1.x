import { createErrorType } from '@komore/error';

import { translateDomain } from './translate.domain';

/**
 * Translate type error
 */
export const translateTypeError = createErrorType(translateDomain, {});
