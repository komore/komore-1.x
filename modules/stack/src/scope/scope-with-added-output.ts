import { type ReadonlyRecord } from '@komore/typescript';
import { type StackType } from '../type/stack-type';
import { type TypedOutput } from '../type/typed-output';
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
 * Scope with an additional output
 *
 * @template ScopeType Scope type
 * @template OutputId Output identifier
 * @template OutputType Output type
 */
export type ScopeWithAddedOutput<
  ScopeType extends GenericScope,
  OutputId extends string,
  OutputType extends StackType
> = Scope<
  ScopeVariables<ScopeType>,
  ScopeLocals<ScopeType>,
  {
    readonly [K in keyof ScopeOutputs<ScopeType>]: ScopeOutputs<ScopeType>[K];
  } & ReadonlyRecord<OutputId, TypedOutput<OutputType>>,
  ScopeProviders<ScopeType>,
  ScopeResources<ScopeType>,
  ScopeDataSources<ScopeType>,
  ScopeModules<ScopeType>
>;
