import { createErrorType } from '@komore/error';

import { chimeDomain } from './chime.domain';

/**
 * Chime type error
 */
export const chimeTypeError = createErrorType(chimeDomain, {});
