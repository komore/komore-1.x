import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformDataSource } from 'cdktf';

/**
 * Typed data source map
 * @param DataSourceId Data source identifier
 * @param DataSourceType Data source  type
 */
export type TypedDataSourceMap<
  DataSourceId extends string,
  DataSourceType extends TerraformDataSource = TerraformDataSource
> = ReadonlyRecord<DataSourceId, DataSourceType>;
