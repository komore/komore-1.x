import { createErrorType } from '@komore/error';

import { lambdaDomain } from './lambda.domain';

/**
 * Lambda type error
 */
export const lambdaTypeError = createErrorType(lambdaDomain, {});
