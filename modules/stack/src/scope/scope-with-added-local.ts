import { type ReadonlyRecord } from '@komore/typescript';
import { type StackType } from '../type/stack-type';
import { type TypedLocal } from '../type/typed-local';
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
 * Scope with an additional local
 *
 * @template ScopeType Scope type
 * @template LocalId Local identifier
 * @template LocalType Local type
 */
export type ScopeWithAddedLocal<
  ScopeType extends GenericScope,
  LocalId extends string,
  LocalType extends StackType
> = Scope<
  ScopeVariables<ScopeType>,
  {
    readonly [K in keyof ScopeLocals<ScopeType>]: ScopeLocals<ScopeType>[K];
  } & ReadonlyRecord<LocalId, TypedLocal<LocalType>>,
  ScopeOutputs<ScopeType>,
  ScopeProviders<ScopeType>,
  ScopeResources<ScopeType>,
  ScopeDataSources<ScopeType>,
  ScopeModules<ScopeType>
>;
