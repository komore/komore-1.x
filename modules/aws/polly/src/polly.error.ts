import { createErrorType } from '@komore/error';

import { pollyDomain } from './polly.domain';

/**
 * Polly error
 */
export const pollyError = createErrorType(pollyDomain, {});
