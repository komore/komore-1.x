import { stepFunctionsDomain } from '@komore/aws/step-functions';
import { createErrorType } from '@komore/error';

/**
 * Step Functions error
 */
export const stepFunctionsError = createErrorType(stepFunctionsDomain, {});
