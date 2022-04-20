import { type QueryCommandInput } from '@aws-sdk/client-dynamodb';
import { buildDynamoDBEventConditionExpression } from './build-dynamodb-event-condition-expression';
import { type DynamoDBEventAttributeNames } from './dynamodb-event-attribute-names';
import { dynamodbEventQueryPlaceholders } from './dynamodb-event-query-placeholders';

/**
 * Creates a function that turnns an event load request into a DynamoDB event query command input
 *
 * @param tableName Table name
 * @param attributeNames Attribute names
 * @returns Function that turnns an event load request into a DynamoDB event query command input
 */
export function eventLoadRequestToDynamoDBEventQueryCommandInput(
  tableName: string,
  attributeNames: DynamoDBEventAttributeNames
): (aggregateKey: string, sequenceStart: number | undefined, sequenceEnd: number | undefined) => QueryCommandInput {
  return (aggregateKey, sequenceStart, sequenceEnd) => {
    const hasStart = sequenceStart !== undefined;
    const hasEnd = sequenceEnd !== undefined;
    const startValue = hasStart
      ? {
          [dynamodbEventQueryPlaceholders.sequence.start]: {
            N: `${sequenceStart}`,
          },
        }
      : undefined;
    const endValue = hasEnd
      ? {
          [dynamodbEventQueryPlaceholders.sequence.end]: {
            N: `${sequenceEnd}`,
          },
        }
      : undefined;

    return {
      TableName: tableName,
      KeyConditionExpression: buildDynamoDBEventConditionExpression(hasStart, hasEnd),
      ExpressionAttributeNames: {
        [dynamodbEventQueryPlaceholders.key.name]: attributeNames.aggregateKey,
        [dynamodbEventQueryPlaceholders.sequence.name]: attributeNames.sequenceNumber,
      },
      ExpressionAttributeValues: {
        [dynamodbEventQueryPlaceholders.key.value]: {
          S: aggregateKey,
        },
        ...startValue,
        ...endValue,
      },
    };
  };
}
