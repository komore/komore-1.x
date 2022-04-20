import { FunctionApp, type FunctionAppConfig } from '@cdktf/provider-azurerm';
import { resource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an Azure function resource
 *
 * @param resourceId Resource identifier
 * @param config Azure function configuration
 * @returns Operator function that
 */
export function azureFunction<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, FunctionAppConfig>
) {
  return resource(resourceId, FunctionApp, config);
}
