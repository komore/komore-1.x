import type { SnapshotRepository } from '@komore/event/store';
import { createCosmosDBClient } from '@komore/integration-azure/cosmos-db';
import type { CosmosDBSnapshotRepositoryConfiguration } from './cosmos-db-snapshot-repository-configuration';

/**
 * Creates a Cosmos DB snapshot repository
 * @param configuration Configuration
 * @template StateType State type
 * @returns DynamoDB snapshot repository
 */
export function cosmosDBSnapshotRepository<StateType>(
  configuration: CosmosDBSnapshotRepositoryConfiguration
): SnapshotRepository<StateType> {
  const cosmosDBClient = configuration.cosmosDBClient ?? createCosmosDBClient();
  return {
    loadSnapshots: aggregateKeys => {
      
    },
    saveSnapshots: snapshots => {

    }
  };
}
