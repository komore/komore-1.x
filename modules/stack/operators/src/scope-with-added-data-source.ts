import type { DataSourceMap, GenericScope } from '@komore/stack';
import type { ReadonlyRecord } from '@komore/typescript';
import type { TerraformDataSource } from 'cdktf';

/**
 * Scope with an added data source
 * @template ScopeType Scope type
 * @template DataSourceTypeName Data source type name
 * @template DataSourceId Data source identifier
 * @template DataSourceType Data source type
 */
export type ScopeWithAddedDataSource<
  ScopeType extends GenericScope,
  DataSourceTypeName extends string,
  DataSourceId extends string,
  DataSourceType extends TerraformDataSource
> = ScopeType & {
  readonly dataSources: ReadonlyRecord<DataSourceTypeName, DataSourceMap<DataSourceId, DataSourceType>>;
};
