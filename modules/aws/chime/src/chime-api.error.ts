import { createErrorType } from '@komore/error';

import { chimeDomain } from './chime.domain';

/**
 * Chime API error
 */
export const chimeApiError = createErrorType(chimeDomain, {});
