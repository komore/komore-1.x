import { map, type OperatorFunction } from '@komore/reactive';
import { type TerraformResource } from 'cdktf';
import { type Construct } from 'constructs';
import { type GenericScope } from '../scope/generic-scope';
import { type ScopedConfiguration } from '../scope/scoped-configuration';
import { type ScopeWithAddedResource } from '../scope/scope-with-added-resource';
import { resolveConfig } from './resolve-config';

/**
 * Adds a resource
 *
 * @param resourceId Resource identifier
 * @param constructor Resource class constructor
 * @param config Configuration or function that returns the configuration
 * @returns Operator function that adds a resource to a scope
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 * @template ResourceTypeName Resource type name
 * @template ResourceType Resource type
 * @template ConfigType Configuration type
 */
export function resource<
  ScopeType extends GenericScope,
  ResourceId extends string,
  ResourceTypeName extends string,
  ResourceType extends TerraformResource,
  ConfigType
>(
  resourceId: ResourceId,
  constructor: (new (construct: Construct, id: string, config: ConfigType) => ResourceType) & {
    readonly tfResourceType: ResourceTypeName;
  },
  config: ScopedConfiguration<ScopeType, ConfigType>
): OperatorFunction<ScopeType, ScopeWithAddedResource<ScopeType, ResourceTypeName, ResourceId, ResourceType>> {
  return map(scope => {
    const resourceConfig = resolveConfig(scope, config);
    const resource = new constructor(scope.construct, resourceId, resourceConfig);
    const resourceTypeName = constructor.tfResourceType;
    const existingResources = scope.resources[resourceTypeName] as ;
    const updatedResourcesOfType = {
      ...scope.resources[resourceTypeName],
      [resourceId]: resource,
    };
    const resources = {
      ...scope.resources,
      [resourceTypeName]: updatedResourcesOfType,
    };

    return {
      ...scope,
      resources,
    } as unknown as ScopeWithAddedResource<ScopeType, ResourceTypeName, ResourceId, ResourceType>;
  });
}
