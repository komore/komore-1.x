import { of } from '@komore/reactive';
import { mergeMap } from '@komore/reactive/operators';
import type { GenericScope } from '@komore/stack';
import { withResource } from '@komore/stack/operators';
import type { TerraformMetaArguments, TerraformResource } from 'cdktf';
import type { Construct } from 'constructs';

/**
 * Adds a resource
 * @param constructor Resource class constructor
 * @param resourceTypeName Resource type name
 * @param resourceId Resource identifier
 * @param config Configuration
 * @returns Operator function that adds a resource to a scope
 * @template ScopeType Scope type
 * @template ResourceTypeName Resource type name
 * @template ResourceId Resource identifier
 * @template ResourceType Resource type
 * @template ConfigType Configuration type
 */
export function addResource<
  ScopeType extends GenericScope,
  ResourceTypeName extends string,
  ResourceId extends string,
  ResourceType extends TerraformResource,
  ConfigType extends TerraformMetaArguments
>(
  constructor: new (construct: Construct, id: string, config: ConfigType) => ResourceType,
  resourceTypeName: ResourceTypeName,
  resourceId: ResourceId,
  config: ConfigType
) {
  return mergeMap((scope: ScopeType) => {
    const resource = new constructor(scope.construct, resourceId, config);
    return of(scope).pipe(withResource(resourceTypeName, resourceId, resource));
  });
}
