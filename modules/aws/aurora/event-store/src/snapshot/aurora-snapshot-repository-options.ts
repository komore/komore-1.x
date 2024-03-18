import { type AuroraApiClient } from '@komore/aws/aurora';

/**
 * Aurora snapshot repository options
 */
export interface AuroraSnapshotRepositoryOptions {
  /**
   * Aurora API client
   */
  readonly apiClient: AuroraApiClient;
  /**
   * Table name
   */
  readonly tableName: string; // TODO: typed?
}
