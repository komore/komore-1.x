import { type InvokeCommandOutput } from '@aws-sdk/client-lambda';

import { createAwsEventType } from '@komore/aws';
import { eventProperties } from '@komore/event';

import { lambdaDomain } from './lambda.domain';

/**
 * Lambda event
 */
export const lambdaEvent = createAwsEventType(lambdaDomain, {
  /**
   * A Lambda function has been invoked
   *
   * @see {@link https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html Invoke}
   */
  functionInvoked: eventProperties<InvokeCommandOutput>(),
});
