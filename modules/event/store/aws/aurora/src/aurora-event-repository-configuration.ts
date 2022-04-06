import { type RDSDataClient } from '@aws-sdk/client-rds-data';

/**
 * Aurora event repository configuration
 */
export interface AuroraEventRepositoryConfiguration {
  readonly client?: RDSDataClient;
  readonly tableName: string;
}
