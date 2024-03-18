import { type EventStoreEventRepositoryLoadParameters } from '@komore/event/store';

import { dynamodbEventRepositoryQueryPlaceholders } from './dynamodb-event-repository-query-placeholders';

/**
 * Creates a function that returns a DynamoDB key condition expression, given event repository load parameters
 *
 * @returns Function that returns a DynamoDB key condition expression, given event repository load parameters
 */
export function eventRepositoryLoadParametersToDynamoDBKeyConditionExpression(): (
  parameters: EventStoreEventRepositoryLoadParameters
) => string {
  const ph = dynamodbEventRepositoryQueryPlaceholders;
  return parameters => {
    const { sequenceEnd, sequenceStart } = parameters;
    const keyTest = `${ph.key.name} = ${ph.key.value}`;
    if (sequenceStart && sequenceEnd) {
      return `${keyTest} AND ${ph.sequence.name} BETWEEN ${ph.sequence.start} AND ${ph.sequence.end}`;
    } else if (sequenceStart) {
      return `${keyTest} AND ${ph.sequence.name} >= ${ph.sequence.start}`;
    } else if (sequenceEnd) {
      return `${keyTest} AND ${ph.sequence.name} <= ${ph.sequence.end}`;
    } else {
      return keyTest;
    }
  };
}
