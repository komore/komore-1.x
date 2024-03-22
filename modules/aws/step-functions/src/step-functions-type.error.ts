import { createErrorType } from '@komore/error';

import { stepFunctionsDomain } from './step-functions.domain';

/**
 * Step Functions type error
 */
export const stepFunctionsTypeError = createErrorType(stepFunctionsDomain, {});
