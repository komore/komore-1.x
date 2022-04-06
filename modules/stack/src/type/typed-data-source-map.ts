import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformDataSource } from 'cdktf';

/**
 * Typed data source map
 *
 * @template DataSourceId Data source identifier
 * @template DataSourceType Data source  type
 */
export type TypedDataSourceMap<
  DataSourceId extends string,
  DataSourceType extends TerraformDataSource
> = ReadonlyRecord<DataSourceId, DataSourceType>;
