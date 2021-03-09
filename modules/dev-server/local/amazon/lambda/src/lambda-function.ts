import type { FunctionConfiguration } from '@aws-sdk/client-lambda';
import type { Script } from 'vm';

/**
 * Lambda function
 */
export interface LambdaFunction {
  readonly configuration: FunctionConfiguration & { FunctionName: string };
  readonly script?: Script;
  readonly tags: Map<string, string>;
}
