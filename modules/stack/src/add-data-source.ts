import type { TerraformDataSource } from 'cdktf';
import type { DataSourceMap } from './data-source-map';
import type { ResourceMap } from './resource-map';
import type { Scope } from './scope';
import type { ScopeWithAddedDataSource } from './scope-with-added-data-source';
import type { TypedLocal } from './typed-local';
import type { TypedOutput } from './typed-output';
import type { TypedVariable } from './typed-variable';
import type { Types } from './types';

/**
 * Adds a data source to a scope
 * @param scope Scope
 * @param dataSourceTypeName Data source type name
 * @param dataSourceId Data source identifier
 * @param dataSource Data source
 * @returns Scope with the added data source
 * @template Variables Variables
 * @template Locals Locals
 * @template Outputs Outputs
 * @template Resources Resources
 * @template DataSources Data sources
 * @template DataSourceTypeName Data source type name
 * @template DataSourceType Data source type
 * @template DataSourceId Data source identifier
 */
export function addDataSource<
  Variables extends Record<string, TypedVariable<keyof Types>>,
  Locals extends Record<string, TypedLocal<keyof Types>>,
  Outputs extends Record<string, TypedOutput<keyof Types>>,
  Resources extends Record<string, ResourceMap<string>>,
  DataSources extends Record<string, DataSourceMap<string>>,
  DataSourceTypeName extends string,
  DataSourceType extends TerraformDataSource,
  DataSourceId extends string
>(
  scope: Scope<Variables, Locals, Outputs, Resources, DataSources>,
  dataSourceTypeName: DataSourceTypeName,
  dataSourceId: DataSourceId,
  dataSource: DataSourceType
): ScopeWithAddedDataSource<typeof scope, DataSourceTypeName, DataSourceType, DataSourceId> {
  return {
    ...scope,
    dataSources: {
      ...scope.dataSources,
      [dataSourceTypeName]: {
        ...scope.resources[dataSourceTypeName],
        [dataSourceId]: dataSource
      }
    }
  };
}
