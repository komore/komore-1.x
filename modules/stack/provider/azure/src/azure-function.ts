import { FunctionApp, type FunctionAppConfig } from '@cdktf/provider-azurerm';
import { addResource } from '@komore/stack/provider';

/**
 * Adds an Azure function resource
 * @param resourceId Resource identifier
 * @param config Azure function configuration
 * @returns Operator function that 
 */
export function azureFunction<ResourceId extends string>(resourceId: ResourceId, config: FunctionAppConfig) {
  return addResource(FunctionApp, 'azurerm_function_app', resourceId, config);
}
