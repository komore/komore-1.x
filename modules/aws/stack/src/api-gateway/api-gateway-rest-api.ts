import { apigateway } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an API Gateway REST API resource
 *
 * @param resourceId Resource identifier
 * @param config API Gateway REST API configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function apiGatewayRestApi<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, apigateway.ApiGatewayRestApiConfig>
) {
  return resource(resourceId, typedResource('aws_api_gateway_rest_api', apigateway.ApiGatewayRestApi), config);
}
