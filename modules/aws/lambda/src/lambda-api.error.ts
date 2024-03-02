import { createErrorType } from '@komore/error';

import { lambdaDomain } from './lambda.domain';

/**
 * Lambda API error
 */
export const lambdaApiError = createErrorType(lambdaDomain, {});
