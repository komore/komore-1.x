import { auroraDomain } from '@komore/aws/aurora';
import { createErrorType } from '@komore/error';

/**
 * Aurora error
 */
export const auroraError = createErrorType(auroraDomain, {});
