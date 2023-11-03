import { createErrorType } from '@komore/error';

import { neptuneDomain } from './neptune.domain';

/**
 * Neptune error
 */
export const neptuneError = createErrorType(neptuneDomain, {});
