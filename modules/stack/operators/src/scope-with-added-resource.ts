import type { GenericScope } from '@komore/stack';
import type { ReadonlyRecord } from '@komore/typescript';
import type { TerraformResource } from 'cdktf';

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
  ResourceId extends string,
  ResourceType extends TerraformResource
> = ScopeType & {
  readonly resources: ReadonlyRecord<ResourceTypeName, ReadonlyRecord<ResourceId, ResourceType>>;
};
