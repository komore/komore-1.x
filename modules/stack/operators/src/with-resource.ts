import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import type { TerraformResource } from 'cdktf';
import type { GenericScope, ScopeWithAddedResource } from '@komore/stack';

export function withResource<
  ScopeType extends GenericScope,
  ResourceTypeName extends string,
  ResourceId extends string,
  ResourceType extends TerraformResource
>(
  resourceTypeName: ResourceTypeName,
  resource: ResourceType,
  resourceId: ResourceId,
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
