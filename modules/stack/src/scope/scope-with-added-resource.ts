import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformResource } from 'cdktf';
import { type GenericScope } from './generic-scope';
import {
  type Scope,
  type ScopeDataSources,
  type ScopeLocals,
  type ScopeModules,
  type ScopeOutputs,
  type ScopeProviders,
  type ScopeResources,
  type ScopeVariables,
} from './scope';

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
> = Scope<
  ScopeVariables<ScopeType>,
  ScopeLocals<ScopeType>,
  ScopeOutputs<ScopeType>,
  ScopeProviders<ScopeType>,
  {
    readonly [K in keyof ScopeResources<ScopeType>]: ScopeResources<ScopeType>[K];
  } & ReadonlyRecord<ResourceTypeName, ReadonlyRecord<ResourceId, ResourceType>>,
  ScopeDataSources<ScopeType>,
  ScopeModules<ScopeType>
>;
