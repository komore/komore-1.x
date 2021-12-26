import { type TerraformResource } from 'cdktf';
import { type DataSourceMap } from './data-source-map';
import { type ResourceMap } from './resource-map';
import { type Scope } from './scope';
import { type ScopeWithAddedResource } from './scope-with-added-resource';
import { type TypedLocal } from './typed-local';
import { type TypedOutput } from './typed-output';
import { type TypedVariable } from './typed-variable';
import { type Types } from './types';

/**
 * Adds a resource to a scope
 * @param scope Scope
 * @param resourceTypeName Resource type name
 * @param resourceId Resource identifier
 * @param resource Resource
 * @returns Scope with the added resource
 * @template Variables Variables
 * @template Locals Locals
 * @template Outputs Outputs
 * @template Resources Resources
 * @template DataSources Data sources
 * @template ResourceTypeName Resource type name
 * @template ResourceType Resource type
 * @template ResourceId Resource identifier
 */
export function addResource<
  Variables extends Record<string, TypedVariable<keyof Types>>,
  Locals extends Record<string, TypedLocal<keyof Types>>,
  Outputs extends Record<string, TypedOutput<keyof Types>>,
  Resources extends Record<string, ResourceMap<string>>,
  DataSources extends Record<string, DataSourceMap<string>>,
  ResourceTypeName extends string,
  ResourceType extends TerraformResource,
  ResourceId extends string
>(
  scope: Scope<Variables, Locals, Outputs, Resources, DataSources>,
  resourceTypeName: ResourceTypeName,
  resourceId: ResourceId,
  resource: ResourceType
): ScopeWithAddedResource<typeof scope, ResourceTypeName, ResourceType, ResourceId> {
  return {
    ...scope,
    resources: {
      ...scope.resources,
      [resourceTypeName]: {
        ...scope.resources[resourceTypeName],
        [resourceId]: resource
      }
    }
  };
}
