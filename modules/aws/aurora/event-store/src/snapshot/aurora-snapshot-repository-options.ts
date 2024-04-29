import { type AuroraApiClient, type AuroraDatabaseName } from '@komore/aws/aurora';

/**
 * Aurora snapshot repository options
 */
export interface AuroraSnapshotRepositoryOptions {
  /**
   * Aurora API client
   */
  readonly apiClient: AuroraApiClient;
  /**
   * Aurora database name
   */
  readonly databaseName: AuroraDatabaseName;
  /**
   * Table name
   */
  readonly tableName: string; // TODO: typed?
}
