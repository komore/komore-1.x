import { stepFunctionsDomain } from '@komore/aws/step-functions';
import { createCommandType } from '@komore/command';

/**
 * Step Functions command
 */
export const stepFunctionsCommand = createCommandType(stepFunctionsDomain, {});
