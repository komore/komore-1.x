import { defaultDynamoDBSnapshotRepositoryAttributeNames } from './default-dynamodb-snapshot-repository-attribute-names';
import { type DynamoDBSnapshotRepositoryAttributeNames } from './dynamodb-snapshot-repository-attribute-names';

/**
 * Normalizes the list of snapshot repository attribute names, providing default values when necessary
 *
 * @param attributeNames Attribute names
 * @returns Attribute names
 */
export function normalizeDynamoDBSnapshotRepositoryAttributeNames(
  attributeNames?: Partial<DynamoDBSnapshotRepositoryAttributeNames>
): DynamoDBSnapshotRepositoryAttributeNames {
  return {
    ...defaultDynamoDBSnapshotRepositoryAttributeNames,
    ...attributeNames,
  };
}
