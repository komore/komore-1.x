import { createErrorType } from '@komore/error';

import { auroraDomain } from './aurora.domain';

/**
 * Aurora type error
 */
export const auroraTypeError = createErrorType(auroraDomain, {});
