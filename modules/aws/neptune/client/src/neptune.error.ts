import { neptuneDomain } from '@komore/aws/neptune';
import { createErrorType } from '@komore/error';

/**
 * Neptune error
 */
export const neptuneError = createErrorType(neptuneDomain, {});
