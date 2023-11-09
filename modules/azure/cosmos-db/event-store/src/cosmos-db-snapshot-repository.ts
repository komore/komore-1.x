import { type SnapshotRepository } from '@komore/event/store';

import { type CosmosDbSnapshotRepositoryOptions } from './cosmos-db-snapshot-repository-options';

/**
 * Creates a Cosmos DB snapshot repository
 *
 * @param options Cosmos DB snapshot repository options
 * @returns Cosmos DB snapshot repository
 * @template StateType State type
 */
export function cosmosDbSnapshotRepository<StateType>(
  options: CosmosDbSnapshotRepositoryOptions
): SnapshotRepository<StateType> {
  const { cosmosDbClient: _, logger: _1 } = options;
  return {
    loadSnapshots: _aggregateKeys => {},
    saveSnapshots: _snapshots => {},
  };
}
