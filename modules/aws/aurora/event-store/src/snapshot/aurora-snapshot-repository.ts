import { type EventStoreSnapshotRepository } from '@komore/event/store';

import { type AuroraSnapshotRepositoryOptions } from './aurora-snapshot-repository-options';

/**
 * Creates an Aurora snapshot repository
 *
 * @param repositoryOptions Aurora snapshot repository options
 * @returns Aurora snapshot repository
 */
export function auroraSnapshotRepository<AggregateType>(
  _repositoryOptions: AuroraSnapshotRepositoryOptions
): EventStoreSnapshotRepository<AggregateType> {
  return {
    loadSnapshots,
    storeSnapshots,
  };
}
