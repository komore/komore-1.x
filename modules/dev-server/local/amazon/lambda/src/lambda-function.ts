import { FunctionConfiguration } from '@aws-sdk/client-lambda';
import { Script } from 'vm';

/**
 * Lambda function
 */
export type LambdaFunction = Readonly<{
  configuration: FunctionConfiguration & { FunctionName: string };
  script?: Script;
  tags: Map<string, string>;
}>;
