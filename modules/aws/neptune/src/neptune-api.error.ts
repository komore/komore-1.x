import { createErrorType } from '@komore/error';

import { neptuneDomain } from './neptune.domain';

/**
 * Neptune API error
 */
export const neptuneApiError = createErrorType(neptuneDomain, {});
