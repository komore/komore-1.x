import { stepFunctionsDomain } from '@komore/aws/step-functions';
import { createQueryType } from '@komore/query';

/**
 * Step Functions query
 */
export const stepFunctionsQuery = createQueryType(stepFunctionsDomain, {});
