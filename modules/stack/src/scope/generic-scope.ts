import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformProvider, type TerraformResource } from 'cdktf';
import { type StackType } from '../type/stack-type';
import { type TypedDataSourceMap } from '../type/typed-data-source-map';
import { type TypedLocal } from '../type/typed-local';
import { type TypedOutput } from '../type/typed-output';
import { type TypedResourceMap } from '../type/typed-resource-map';
import { type TypedVariable } from '../type/typed-variable';
import { type Scope } from './scope';

/**
 * Generic scope
 */
export type GenericScope = Scope<
  ReadonlyRecord<string, TypedVariable<StackType>>,
  ReadonlyRecord<string, TypedLocal<StackType>>,
  ReadonlyRecord<string, TypedOutput<StackType>>,
  ReadonlyRecord<string, TerraformProvider>,
  ReadonlyRecord<string, TypedResourceMap<string, TerraformResource>>,
  ReadonlyRecord<string, TypedDataSourceMap<string>>
>;
