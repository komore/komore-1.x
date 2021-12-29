import { map, type OperatorFunction } from '@komore/reactive';
import { type GenericScope, type ScopeWithAddedResource } from '@komore/stack';
import { type TerraformResource } from 'cdktf';

export function withResource<
  ScopeType extends GenericScope,
  ResourceTypeName extends string,
  ResourceId extends string,
  ResourceType extends TerraformResource
>(
  resourceTypeName: ResourceTypeName,
  resourceId: ResourceId,
  resource: ResourceType
): OperatorFunction<ScopeType, ScopeWithAddedResource<ScopeType, ResourceTypeName, ResourceType, ResourceId>> {
  return map((scope: ScopeType): ScopeWithAddedResource<ScopeType, ResourceTypeName, ResourceId, ResourceType> => {
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
  });
}
