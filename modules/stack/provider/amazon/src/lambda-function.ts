import { addResource } from '@komore/stack/provider';
import type { LambdaFunctionConfig } from './.gen/lambda-function';
import { LambdaFunction } from './.gen/lambda-function';

/**
 * Adds a Lambda function resource
 * @param resourceId Resource identifier
 * @param config Lambda function configuration
 * @returns Operator function that adds a Lambda function resource
 * @template ResourceId Resource identifier
 */
export function lambdaFunction<ResourceId extends string>(resourceId: ResourceId, config: LambdaFunctionConfig) {
  return addResource(LambdaFunction, 'aws_lambda_function', resourceId, config);
}
