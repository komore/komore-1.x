import { createErrorType } from '@komore/error';

import { auroraDomain } from './aurora.domain';

/**
 * Aurora API error
 */
export const auroraApiError = createErrorType(auroraDomain, {});
