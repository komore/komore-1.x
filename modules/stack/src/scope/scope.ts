import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformModule, type TerraformDataSource, type TerraformProvider, type TerraformResource } from 'cdktf';
import { type Construct } from 'constructs';
import { type StackType } from '../type/stack-type';
import { type StackTypeNames } from '../type/stack-type-names';
import { type TypedDataSourceMap } from '../type/typed-data-source-map';
import { type TypedLocal } from '../type/typed-local';
import { type TypedModule } from '../type/typed-module';
import { type TypedModuleDefinition } from '../type/typed-module-definition';
import { type TypedOutput } from '../type/typed-output';
import { type TypedResourceMap } from '../type/typed-resource-map';
import { type TypedVariable } from '../type/typed-variable';
import { type GenericScope } from './generic-scope';

/**
 * Scope
 * @template Variables Variables
 * @template Locals Locals
 * @template Outputs Outputs
 * @template Providers Providers
 * @template Resources Resources
 * @template DataSources Data sources
 * @template Modules Modules
 */
export interface Scope<
  Variables extends ReadonlyRecord<string, TypedVariable<StackType>> = ReadonlyRecord<string, never>,
  Locals extends ReadonlyRecord<string, TypedLocal<keyof StackTypeNames>> = ReadonlyRecord<string, never>,
  Outputs extends ReadonlyRecord<string, TypedOutput<keyof StackTypeNames>> = ReadonlyRecord<string, never>,
  Providers extends ReadonlyRecord<string, TerraformProvider> = ReadonlyRecord<string, never>,
  Resources extends ReadonlyRecord<string, TypedResourceMap<string, TerraformResource>> = ReadonlyRecord<string, never>,
  DataSources extends ReadonlyRecord<string, TypedDataSourceMap<string, TerraformDataSource>> = ReadonlyRecord<
    string,
    never
  >,
  Modules extends ReadonlyRecord<string, TypedModule<string, TerraformModule>> = ReadonlyRecord<string, never>
> {
  readonly construct: Construct;
  readonly dataSources: DataSources;
  readonly locals: Locals;
  readonly modules: Modules;
  readonly outputs: Outputs;
  readonly providers: Providers;
  readonly resources: Resources;
  readonly variables: Variables;
}

/**
 * Scope variables
 * @template ScopeType Scope type
 */
export type ScopeVariables<ScopeType extends GenericScope> = ScopeType extends Scope<
  infer Variables,
  ReadonlyRecord<string, TypedLocal<keyof StackTypeNames>>,
  ReadonlyRecord<string, TypedOutput<keyof StackTypeNames>>,
  ReadonlyRecord<string, TerraformProvider>,
  ReadonlyRecord<string, TypedResourceMap<string, TerraformResource>>,
  ReadonlyRecord<string, TypedDataSourceMap<string, TerraformDataSource>>,
  ReadonlyRecord<string, TypedModule<string, TypedModuleDefinition>>
>
  ? Variables
  : never;

/**
 * Scope locals
 * @template ScopeType Scope type
 */
export type ScopeLocals<ScopeType extends GenericScope> = ScopeType extends Scope<
  ReadonlyRecord<string, TypedVariable<keyof StackTypeNames>>,
  infer Locals,
  ReadonlyRecord<string, TypedOutput<keyof StackTypeNames>>,
  ReadonlyRecord<string, TerraformProvider>,
  ReadonlyRecord<string, TypedResourceMap<string, TerraformResource>>,
  ReadonlyRecord<string, TypedDataSourceMap<string, TerraformDataSource>>,
  ReadonlyRecord<string, TypedModule<string, TypedModuleDefinition>>
>
  ? Locals
  : never;

/**
 * Scope outputs
 * @template ScopeType Scope type
 */
export type ScopeOutputs<ScopeType extends GenericScope> = ScopeType extends Scope<
  ReadonlyRecord<string, TypedVariable<keyof StackTypeNames>>,
  ReadonlyRecord<string, TypedLocal<keyof StackTypeNames>>,
  infer Outputs,
  ReadonlyRecord<string, TerraformProvider>,
  ReadonlyRecord<string, TypedResourceMap<string, TerraformResource>>,
  ReadonlyRecord<string, TypedDataSourceMap<string, TerraformDataSource>>,
  ReadonlyRecord<string, TypedModule<string, TypedModuleDefinition>>
>
  ? Outputs
  : never;

/**
 * Scope providers
 * @template ScopeType Scope type
 */
export type ScopeProviders<ScopeType extends GenericScope> = ScopeType extends Scope<
  ReadonlyRecord<string, TypedVariable<keyof StackTypeNames>>,
  ReadonlyRecord<string, TypedLocal<keyof StackTypeNames>>,
  ReadonlyRecord<string, TypedOutput<keyof StackTypeNames>>,
  infer Providers,
  ReadonlyRecord<string, TypedResourceMap<string, TerraformResource>>,
  ReadonlyRecord<string, TypedDataSourceMap<string, TerraformDataSource>>,
  ReadonlyRecord<string, TypedModule<string, TypedModuleDefinition>>
>
  ? Providers
  : never;

/**
 * Scope resources
 * @template ScopeType Scope type
 */
export type ScopeResources<ScopeType extends GenericScope> = ScopeType extends Scope<
  ReadonlyRecord<string, TypedVariable<keyof StackTypeNames>>,
  ReadonlyRecord<string, TypedLocal<keyof StackTypeNames>>,
  ReadonlyRecord<string, TypedOutput<keyof StackTypeNames>>,
  ReadonlyRecord<string, TerraformProvider>,
  infer Resources,
  ReadonlyRecord<string, TypedDataSourceMap<string, TerraformDataSource>>,
  ReadonlyRecord<string, TypedModule<string, TypedModuleDefinition>>
>
  ? Resources
  : never;

/**
 * Scope data sources
 * @template ScopeType Scope type
 */
export type ScopeDataSources<ScopeType extends GenericScope> = ScopeType extends Scope<
  ReadonlyRecord<string, TypedVariable<keyof StackTypeNames>>,
  ReadonlyRecord<string, TypedLocal<keyof StackTypeNames>>,
  ReadonlyRecord<string, TypedOutput<keyof StackTypeNames>>,
  ReadonlyRecord<string, TerraformProvider>,
  ReadonlyRecord<string, TypedResourceMap<string, TerraformResource>>,
  infer DataSources,
  ReadonlyRecord<string, TypedModule<string, TypedModuleDefinition>>
>
  ? DataSources
  : never;

/**
 * Scope modules
 * @template ScopeType Scope type
 */
export type ScopeModules<ScopeType extends GenericScope> = ScopeType extends Scope<
  ReadonlyRecord<string, TypedVariable<keyof StackTypeNames>>,
  ReadonlyRecord<string, TypedLocal<keyof StackTypeNames>>,
  ReadonlyRecord<string, TypedOutput<keyof StackTypeNames>>,
  ReadonlyRecord<string, TerraformProvider>,
  ReadonlyRecord<string, TypedResourceMap<string, TerraformResource>>,
  ReadonlyRecord<string, TypedDataSourceMap<string, TerraformDataSource>>,
  infer Modules
>
  ? Modules
  : never;
