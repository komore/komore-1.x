import type { ReadonlyRecord } from '@komore/typescript';
import type { TerraformDataSource } from 'cdktf';
import type { DataSourceMap } from './data-source-map';
import type { GenericScope } from './generic-scope';

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
  DataSourceType extends TerraformDataSource,
  DataSourceId extends string
> = ScopeType & {
  readonly dataSources: ReadonlyRecord<DataSourceTypeName, DataSourceMap<DataSourceId, DataSourceType>>;
};
