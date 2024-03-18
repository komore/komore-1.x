import { type DynamoDBTableName, type QueryDynamoDBParameters } from '@komore/aws/dynamodb';
import { type EventStoreEventRepositoryLoadParameters } from '@komore/event/store';

import { type DynamoDBEventRepositoryAttributeNames } from '../attribute/dynamodb-event-repository-attribute-names';
import { eventRepositoryAttributeNamesToDynamoDBExpressionAttributeNames } from './event-repository-attribute-names-to-dynamodb-expression-attribute-names';
import { eventRepositoryLoadParametersToDynamoDBKeyConditionExpression } from './event-repository-load-parameters-to-dynamodb-key-condition-expression';
import { eventRepositoryLoadParametersToDynamoDBProjectionExpression } from './event-repository-load-parameters-to-dynamodb-projection-expression';

/**
 * Creates a function that returns DynamoDB query parameters, given event repository load parameters
 *
 * @param attributeNames DynamoDB event repository attribute names
 * @param tableName DynamoDB table name
 * @returns Function that returns DynamoDB query parameters, given event repository load parameters
 */
export function eventRepositoryLoadParametersToDynamoDBQueryParameters(
  attributeNames: DynamoDBEventRepositoryAttributeNames,
  tableName: DynamoDBTableName
): (parameters: EventStoreEventRepositoryLoadParameters) => QueryDynamoDBParameters {
  const TableName = tableName;
  const ExpressionAttributeNames = eventRepositoryAttributeNamesToDynamoDBExpressionAttributeNames(attributeNames);
  const toKeyConditionExpression = eventRepositoryLoadParametersToDynamoDBKeyConditionExpression();
  const toProjectionExpression = eventRepositoryLoadParametersToDynamoDBProjectionExpression(attributeNames);
  return parameters => {
    const KeyConditionExpression = toKeyConditionExpression(parameters);
    const ProjectionExpression = toProjectionExpression(parameters);
    return {
      ExpressionAttributeNames,
      KeyConditionExpression,
      ProjectionExpression,
      TableName,
    };
  };
}
