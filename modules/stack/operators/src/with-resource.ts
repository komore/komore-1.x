import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import type { TerraformResource } from 'cdktf';
import type { GenericScope } from '@komore/stack';
import type { ScopeWithAddedResource } from './scope-with-added-resource';

export function withResource<
  ScopeType extends GenericScope,
  ResourceTypeName extends string,
  ResourceId extends string,
  ResourceType extends TerraformResource
>(
  resourceTypeName: ResourceTypeName,
  resourceId: ResourceId,
  resource: ResourceType
): OperatorFunction<ScopeType, ScopeWithAddedResource<ScopeType, ResourceTypeName, ResourceId, ResourceType>> {
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
