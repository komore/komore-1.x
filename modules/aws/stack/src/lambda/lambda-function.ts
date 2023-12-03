import { lambdafunction } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Lambda function resource
 * @param resourceId Resource identifier
 * @param config Lambda function configuration
 * @returns Operator function that adds a Lambda function resource
 * @template ResourceId Resource identifier
 */
export function lambdaFunction<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, lambdafunction.LambdaFunctionConfig>
) {
  return resource(resourceId, typedResource('aws_lambda_function', lambdafunction.LambdaFunction), config);
}
