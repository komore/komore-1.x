import { defaultDynamoDBEventAttributeNames } from './default-dynamodb-event-attribute-names';
import { type DynamoDBEventAttributeNames } from './dynamodb-event-attribute-names';

/**
 * Normalizes the list of attribute names, providing default values when necessary
 *
 * @param attributeNames Attribute names
 * @returns Attribute names
 */
export function normalizeDynamoDBEventAttributeNames(
  attributeNames?: Partial<DynamoDBEventAttributeNames>
): DynamoDBEventAttributeNames {
  return {
    ...defaultDynamoDBEventAttributeNames,
    ...attributeNames,
  };
}
