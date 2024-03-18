import { type ReadonlyRecord } from '@komore/typescript';

import { type DynamoDBEventRepositoryAttributeNames } from '../attribute/dynamodb-event-repository-attribute-names';
import { dynamodbEventRepositoryQueryPlaceholders } from './dynamodb-event-repository-query-placeholders';

/**
 * Returns DynamoDB expression attribute names, given event repository attribute names
 *
 * The expression attribute names is the list of placeholders for attributes:
 *
 * - `#k`: Aggregate key
 * - `#s`: Sequence number
 *
 * @param attributeNames Attribute names
 * @returns DynamoDB expression attribute names
 */
export function eventRepositoryAttributeNamesToDynamoDBExpressionAttributeNames(
  attributeNames: DynamoDBEventRepositoryAttributeNames
): ReadonlyRecord<string, string> {
  const ph = dynamodbEventRepositoryQueryPlaceholders;
  return {
    [ph.key.name]: attributeNames.aggregateKey,
    [ph.sequence.name]: attributeNames.sequenceNumber,
  };
}
