import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformResource } from 'cdktf';
import { type GenericScope } from './generic-scope';
import { type Scope } from './scope';
import { type ScopeDataSources } from './scope-data-sources';
import { type ScopeLocals } from './scope-locals';
import { type ScopeModules } from './scope-modules';
import { type ScopeOutputs } from './scope-outputs';
import { type ScopeProviders } from './scope-providers';
import { type ScopeResources } from './scope-resources';
import { type ScopeVariables } from './scope-variables';

/**
 * Scope with an additional resource
 *
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
