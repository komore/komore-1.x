import { mergeMap, of } from '@komore/reactive';
import type { GenericScope } from '@komore/stack';
import { withResource } from '@komore/stack/operators';
import type { TerraformMetaArguments, TerraformResource } from 'cdktf';
import type { Construct } from 'constructs';

/**
 * Adds a resource
 * @param constructor Resource class constructor
 * @param resourceTypeName Resource type name
 * @param resourceId Resource identifier
 * @param config Configuration or function that returns the configuration
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
  config: ConfigType | ((scope: ScopeType) => ConfigType)
) {
  return mergeMap((scope: ScopeType) => {
    const conf = (typeof config === 'function') ? config(scope) : config;
    const resource = new constructor(scope.construct, resourceId, conf);
    return of(scope).pipe(withResource(resourceTypeName, resourceId, resource));
  });
}
