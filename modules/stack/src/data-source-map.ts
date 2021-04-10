import type { ReadonlyRecord } from '@komore/typescript';
import type { TerraformDataSource } from 'cdktf';

/**
 * Data source map
 * @template DataSourceId Data source identifier
 * @template DataSourceType Data source type
 */
export type DataSourceMap<
  DataSourceId extends string,
  DataSourceType extends TerraformDataSource = TerraformDataSource
> = ReadonlyRecord<DataSourceId, DataSourceType>;
