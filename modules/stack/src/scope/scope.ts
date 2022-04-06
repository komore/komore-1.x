import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformModule, type TerraformDataSource, type TerraformProvider, type TerraformResource } from 'cdktf';
import { type Construct } from 'constructs';
import { type StackType } from '../type/stack-type';
import { type StackTypeNames } from '../type/stack-type-names';
import { type TypedDataSourceMap } from '../type/typed-data-source-map';
import { type TypedLocal } from '../type/typed-local';
import { type TypedModule } from '../type/typed-module';
import { type TypedOutput } from '../type/typed-output';
import { type TypedResourceMap } from '../type/typed-resource-map';

/**
 * Scope
 *
 * @template Variables Variables
 * @template Locals Locals
 * @template Outputs Outputs
 * @template Providers Providers
 * @template Resources Resources
 * @template DataSources Data sources
 * @template Modules Modules
 */
export interface Scope<
  Variables extends ReadonlyRecord<string, StackType>,
  Locals extends ReadonlyRecord<string, TypedLocal<keyof StackTypeNames>>,
  Outputs extends ReadonlyRecord<string, TypedOutput<keyof StackTypeNames>>,
  Providers extends ReadonlyRecord<string, TerraformProvider>,
  Resources extends ReadonlyRecord<string, TypedResourceMap<string, TerraformResource>>,
  DataSources extends ReadonlyRecord<string, TypedDataSourceMap<string, TerraformDataSource>>,
  Modules extends ReadonlyRecord<string, TypedModule<string, TerraformModule>>
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
