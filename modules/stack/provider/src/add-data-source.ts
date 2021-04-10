import type { OperatorFunction } from '@komore/reactive';
import { of } from '@komore/reactive';
import { mergeMap } from '@komore/reactive/operators';
import type { GenericScope } from '@komore/stack';
import { withDataSource } from '@komore/stack/operators';
import type { TerraformDataSource, TerraformMetaArguments } from 'cdktf';
import type { Construct } from 'constructs';

/**
 * Adds a data source
 * @param constructor Resource class constructor
 * @param dataSourceTypeName Data source type name
 * @param dataSourceId Data source identifier
 * @param config Configuration
 * @returns Operator function that adds a data source
 * @template ScopeType Scope type
 * @template DataSourceTypeName Data source type name
 * @template DataSourceId Data source identifier
 * @template DataSourceType Data source type
 * @template ConfigType Configuration type
 */
export function addDataSource<
  ScopeType extends GenericScope,
  DataSourceTypeName extends string,
  DataSourceId extends string,
  DataSourceType extends TerraformDataSource,
  ConfigType extends TerraformMetaArguments
>(
  constructor: new (construct: Construct, id: string, config: ConfigType) => DataSourceType,
  dataSourceTypeName: DataSourceTypeName,
  dataSourceId: DataSourceId,
  config: ConfigType
): OperatorFunction<ScopeType, ScopeType> {
  return mergeMap(scope => {
    const dataSource = new constructor(scope.construct, dataSourceId, config);
    return of(scope).pipe(withDataSource(dataSourceTypeName, dataSourceId, dataSource));
  });
}
