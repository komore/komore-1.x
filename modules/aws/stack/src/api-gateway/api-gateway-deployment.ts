import { apigateway } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an API Gateway deployment resource
 *
 * @param resourceId Resource identifier
 * @param config API Gateway deployment configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function apiGatewayDeployment<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, apigateway.ApiGatewayDeploymentConfig>
) {
  return resource(resourceId, typedResource('aws_api_gateway_deployment', apigateway.ApiGatewayDeployment), config);
}
