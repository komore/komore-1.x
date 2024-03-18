import { type EventStoreEventRepositoryLoadParameters } from '@komore/event/store';

import { type DynamoDBEventRepositoryAttributeNames } from '../attribute/dynamodb-event-repository-attribute-names';

/**
 * Creates a function that returns DynamoDB expression attribute values, given event repository load parameters
 *
 * The projection expression is the list of attributes to retrieve for each item, i.e.:
 *
 * - Aggregate key
 * - Event data
 * - Event name
 * - Sequence number
 * - Timestamp
 *
 * @param attributeNames Attribute names
 * @returns Function that returns DynamoDB expression attribute values, given event repository load parameters
 */
export function eventRepositoryLoadParametersToDynamoDBProjectionExpression(
  attributeNames: DynamoDBEventRepositoryAttributeNames
): (parameters: EventStoreEventRepositoryLoadParameters) => string {
  const projectionExpression = [
    attributeNames.aggregateKey,
    attributeNames.eventData,
    attributeNames.eventName,
    attributeNames.sequenceNumber,
    attributeNames.timestamp,
  ].join(', ');
  return () => projectionExpression;
}
