import { type RDSDataClient } from '@aws-sdk/client-rds-data';

/**
 * Aurora snapshot repository configuration
 */
export interface AuroraSnapshotRepositoryConfiguration {
  readonly client?: RDSDataClient;
  readonly tableName: string;
}
