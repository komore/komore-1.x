import { apigateway } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an API Gateway stage resource
 *
 * @param resourceId Resource identifier
 * @param config API Gateway stage configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function apiGatewayStage<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, apigateway.ApiGatewayStageConfig>
) {
  return resource(resourceId, typedResource('aws_api_gateway_stage', apigateway.ApiGatewayStage), config);
}
