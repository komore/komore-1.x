import { createErrorType } from '@komore/error';

import { neptuneDomain } from './neptune.domain';

/**
 * Neptune type error
 */
export const neptuneTypeError = createErrorType(neptuneDomain, {});
