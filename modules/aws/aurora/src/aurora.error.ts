import { createErrorType } from '@komore/error';

import { auroraDomain } from './aurora.domain';

/**
 * Aurora error
 */
export const auroraError = createErrorType(auroraDomain, {});
