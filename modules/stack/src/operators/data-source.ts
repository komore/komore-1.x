import { map, type OperatorFunction } from '@komore/reactive';
import { type TerraformDataSource } from 'cdktf';
import { type Construct } from 'constructs';
import { type GenericScope } from '../scope/generic-scope';
import { type ScopedConfiguration } from '../scope/scoped-configuration';
import { type ScopeWithAddedDataSource } from '../scope/scope-with-added-data-source';
import { resolveScopedConfiguration } from './resolve-scoped-configuration';

/**
 * Adds a data source
 *
 * @param dataSourceId Data source identifier
 * @param constructor Data source class constructor
 * @param config Configuration or function that returns the configuration
 * @returns Operator function that adds a data source to a scope
 * @template ScopeType Scope type
 * @template DataSourceId Data source identifier
 * @template DataSourceTypeName Data source type name
 * @template DataSourceType Data source type
 * @template ConfigType Configuration type
 */
export function dataSource<
  ScopeType extends GenericScope,
  DataSourceId extends string,
  DataSourceTypeName extends string,
  DataSourceType extends TerraformDataSource,
  ConfigType
>(
  dataSourceId: DataSourceId,
  constructor: (new (construct: Construct, id: string, config: ConfigType) => DataSourceType) & {
    readonly tfResourceType: DataSourceTypeName;
  },
  config: ScopedConfiguration<ScopeType, ConfigType>
): OperatorFunction<ScopeType, ScopeWithAddedDataSource<ScopeType, DataSourceTypeName, DataSourceId, DataSourceType>> {
  return map(scope => {
    const dataSourceConfig = resolveScopedConfiguration(scope, config);
    const dataSource = new constructor(scope.construct, dataSourceId, dataSourceConfig);
    const dataSourceTypeName = constructor.tfResourceType;
    return {
      ...scope,
      dataSources: {
        ...scope.dataSources,
        [dataSourceTypeName]: {
          ...scope.dataSources[dataSourceTypeName],
          [dataSourceId]: dataSource,
        },
      },
    } as ScopeWithAddedDataSource<ScopeType, DataSourceTypeName, DataSourceId, DataSourceType>;
  });
}
