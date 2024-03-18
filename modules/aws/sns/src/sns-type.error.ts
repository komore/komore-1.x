import { createErrorType } from '@komore/error';

import { snsDomain } from './sns.domain';

/**
 * SNS type error
 */
export const snsTypeError = createErrorType(snsDomain, {});
