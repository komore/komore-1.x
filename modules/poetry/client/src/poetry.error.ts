import { createErrorType } from '@komore/error';
import { poetryDomain } from '@komore/poetry';

/**
 * Poetry error
 */
export const poetryError = createErrorType(poetryDomain, {});
