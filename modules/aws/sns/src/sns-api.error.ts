import { createErrorType } from '@komore/error';

import { snsDomain } from './sns.domain';

/**
 * SNS API error
 */
export const snsApiError = createErrorType(snsDomain, {});
