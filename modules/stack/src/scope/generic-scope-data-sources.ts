import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformDataSource } from 'cdktf';
import { type TypedDataSourceMap } from '../type/typed-data-source-map';

/**
 * Generic scope data sources
 */
export type GenericScopeDataSources = ReadonlyRecord<string, TypedDataSourceMap<string, TerraformDataSource>>;
