import { createErrorType } from '@komore/error';

import { stepFunctionsDomain } from './step-functions.domain';

/**
 * Step Functions API error
 */
export const stepFunctionsApiError = createErrorType(stepFunctionsDomain, {});
