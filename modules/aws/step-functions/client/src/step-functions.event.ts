import { stepFunctionsDomain } from '@komore/aws/step-functions';
import { createEventType } from '@komore/event';

/**
 * Step Functions event
 */
export const stepFunctionsEvent = createEventType(stepFunctionsDomain, {});
