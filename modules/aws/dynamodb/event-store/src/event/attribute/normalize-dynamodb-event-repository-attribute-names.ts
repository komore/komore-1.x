import { defaultDynamoDBEventRepositoryAttributeNames } from './default-dynamodb-event-repository-attribute-names';
import { type DynamoDBEventRepositoryAttributeNames } from './dynamodb-event-repository-attribute-names';

/**
 * Normalizes the list of event repository attribute names, providing default values when necessary
 *
 * @param attributeNames Attribute names
 * @returns Normalized attribute names
 */
export function normalizeDynamoDBEventRepositoryAttributeNames(
  attributeNames?: Partial<DynamoDBEventRepositoryAttributeNames>
): DynamoDBEventRepositoryAttributeNames {
  return {
    ...defaultDynamoDBEventRepositoryAttributeNames,
    ...attributeNames,
  };
}
