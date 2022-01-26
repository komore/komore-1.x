import { lambdafunction } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds a Lambda function resource
 * @param resourceId Resource identifier
 * @param config Lambda function configuration
 * @returns Operator function that adds a Lambda function resource
 * @template ResourceId Resource identifier
 */
export function lambdaFunction<ResourceId extends string>(resourceId: ResourceId, config: lambdafunction.LambdaFunctionConfig) {
  return addResource(lambdafunction.LambdaFunction, 'aws_lambda_function', resourceId, config);
}
