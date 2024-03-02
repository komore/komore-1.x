import { createFunctionTrigger, type FunctionTrigger } from '@komore/function';

import { type CloudFunctionsHttpEventTriggerOptions } from './cloud-functions-http-event-trigger-options';
import { type CloudFunctionsHttpFunctionParameters } from './cloud-functions-http-function-parameters';

/**
 * Creates Cloud Functions HTTP event trigger
 *
 * @param triggerOptions Cloud Functions HTTP event trigger options
 * @returns Cloud Functions HTTP event trigger
 */
export function cloudFunctionsHttpEvent(
  _triggerOptions?: CloudFunctionsHttpEventTriggerOptions
): FunctionTrigger<CloudFunctionsHttpFunctionParameters, CloudFunctionsHttpEvent, CloudFunctionsHttpResponse> {
  return createFunctionTrigger({
    processor,
    test: parameters => false,
  });
}
