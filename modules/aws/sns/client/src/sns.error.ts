import { createErrorType } from '@komore/error';

import { snsDomain } from './sns.domain';

/**
 * SNS error
 */
export const snsError = createErrorType(snsDomain, {});
