import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformDataSource } from 'cdktf';
import { type GenericScope } from './generic-scope';

/**
 * Scope with an additional data source
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
  readonly dataSources: ReadonlyRecord<DataSourceTypeName, ReadonlyRecord<DataSourceId, DataSourceType>>;
};
