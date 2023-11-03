import { createErrorType } from '@komore/error';

import { lambdaDomain } from './lambda.domain';

/**
 * Lambda error
 */
export const lambdaError = createErrorType(lambdaDomain, {});
