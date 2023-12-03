import { DataGithubOrganization, type DataGithubOrganizationConfig } from '@cdktf/provider-github';
import { dataSource, typedDataSource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Github organization data source
 *
 * @param dataSourceId Data source identifier
 * @param config Github organization configuration
 * @template ScopeType Scope type
 * @template DataSourceId Data source identifier
 */
export function githubOrganizationReference<ScopeType extends GenericScope, DataSourceId extends string>(
  dataSourceId: DataSourceId,
  config: ScopedConfiguration<ScopeType, DataGithubOrganizationConfig>
) {
  return dataSource(dataSourceId, typedDataSource('github_organization', DataGithubOrganization), config);
}
