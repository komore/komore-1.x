import { type InvokeCommandInput } from '@aws-sdk/client-lambda';

import { createAwsCommandType } from '@komore/aws';
import { commandProperties } from '@komore/command';

import { lambdaDomain } from './lambda.domain';

/**
 * Lambda command
 */
export const lambdaCommand = createAwsCommandType(lambdaDomain, {
  /**
   * Invokes a Lambda function
   *
   * @see {@link https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html Invoke}
   */
  invokeFunction: commandProperties<InvokeCommandInput>(),
});
