import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformResource } from 'cdktf';
import { type GenericScope } from './generic-scope';
import { type ResourceMap } from './resource-map';

/**
 * Scope with an additional resource
 * @template ScopeType Scope type
 * @template ResourceTypeName Resource type name
 * @template ResourceId Resource identifier
 * @template ResourceType Resource type
 */
export type ScopeWithAddedResource<
  ScopeType extends GenericScope,
  ResourceTypeName extends string,
  ResourceType extends TerraformResource,
  ResourceId extends string
> = ScopeType & {
  readonly resources: ReadonlyRecord<ResourceTypeName, ResourceMap<ResourceId, ResourceType>>;
}
