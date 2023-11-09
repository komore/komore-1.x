import { type AuroraClient } from '@komore/aws/aurora';

/**
 * Aurora snapshot repository options
 */
export interface AuroraSnapshotRepositoryOptions {
  /**
   * Aurora client
   */
  readonly auroraClient: AuroraClient;
  /**
   * Table name
   */
  readonly tableName: string;
}
