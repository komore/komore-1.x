import { type DynamoDBAttributeValue, type QueryDynamoDBParameters } from '@komore/aws/dynamodb';

import { buildDynamoDBEventConditionExpression } from './build-dynamodb-event-condition-expression';
import { dynamodbEventQueryPlaceholders } from './dynamodb-event-query-placeholders';
import { type EventLoadRequestToDynamoDBQueryParametersOptions } from './event-load-request-to-dynamodb-query-parameters-options';
import { type EventLoadRequestToDynamoDBQueryParametersParameters } from './event-load-request-to-dynamodb-query-parameters-parameters';

/**
 * Creates a function that returns DynamoDB query parameters, given an event load request
 *
 * @param options Options
 * @returns Function that returns DynamoDB query parameters, given an event load request
 */
export function eventLoadRequestToDynamoDBQueryParameters(
  options: EventLoadRequestToDynamoDBQueryParametersOptions
): (parameters: EventLoadRequestToDynamoDBQueryParametersParameters) => QueryDynamoDBParameters {
  const { attributeNames, tableName: TableName } = options;
  const toStart = valueToNumberAttributeValue(dynamodbEventQueryPlaceholders.sequence.start);
  const toEnd = valueToNumberAttributeValue(dynamodbEventQueryPlaceholders.sequence.end);
  const ExpressionAttributeNames = {
    [dynamodbEventQueryPlaceholders.key.name]: attributeNames.aggregateKey,
    [dynamodbEventQueryPlaceholders.sequence.name]: attributeNames.sequenceNumber,
  };
  return ({ aggregateKey, sequenceStart, sequenceEnd }) => {
    const start = toStart(sequenceStart);
    const end = toEnd(sequenceEnd);
    const ExpressionAttributeValues = {
      [dynamodbEventQueryPlaceholders.key.value]: {
        S: aggregateKey,
      },
      ...start,
      ...end,
    };
    const KeyConditionExpression = buildDynamoDBEventConditionExpression(start !== undefined, end !== undefined);
    return {
      ExpressionAttributeNames,
      ExpressionAttributeValues,
      KeyConditionExpression,
      TableName,
    };
  };
}

function valueToNumberAttributeValue(name: string): (value: number | undefined) => DynamoDBAttributeValue | undefined {
  return value =>
    value !== undefined
      ? {
          [name]: {
            N: `${value}`,
          },
        }
      : undefined;
}
