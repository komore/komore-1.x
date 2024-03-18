import { queryDynamoDB, type QueryDynamoDBParameters, type QueryDynamoDBResult } from '@komore/aws/dynamodb';
import { arrayToFlattenedArray, each } from '@komore/collection';
import { type EventFromType, type EventType as GenericEventType } from '@komore/event';
import { type EventStoreEventRepository } from '@komore/event/store';
import { empty, expand, map, toArray } from '@komore/reactive';

import { normalizeDynamoDBEventRepositoryAttributeNames } from './attribute/normalize-dynamodb-event-repository-attribute-names';
import { type DynamoDBEventRepositoryOptions } from './dynamodb-event-repository-options';
import { dynamoDBEventStoreItemToEventWithStoreMetadata } from './mapping/dynamodb-event-store-item-to-event-with-store-metadata';
import { eventRepositoryLoadParametersToDynamoDBQueryParameters } from './query/event-repository-load-parameters-to-dynamodb-query-parameters';
import { eventWithStoreMetadataToDynamoDBEventStoreItem } from './mapping/event-with-store-metadata-to-dynamodb-event-store-item';

/**
 * Creates a DynamoDB event repository
 *
 * @param repositoryOptions DynamoDB event repository options
 * @returns DynamoDB event repository
 */
export function createDynamoDBEventRepository<EventType extends GenericEventType>(
  repositoryOptions: DynamoDBEventRepositoryOptions<EventType>
): EventStoreEventRepository<EventFromType<EventType>> {
  const { apiClient, eventType, tableName } = repositoryOptions;
  const attributeNames = normalizeDynamoDBEventRepositoryAttributeNames(repositoryOptions.attributeNames);
  const query = queryDynamoDB(apiClient);
  const toQueryParameters = eventRepositoryLoadParametersToDynamoDBQueryParameters(attributeNames, tableName);
  const toEventWithStoreMetadata = dynamoDBEventStoreItemToEventWithStoreMetadata({ attributeNames, eventType });
  const toDynamoDBItem = eventWithStoreMetadataToDynamoDBEventStoreItem({ attributeNames });

  return {
    loadEvents: parameters => {
      const queryParameters = toQueryParameters(parameters);
      return query(queryParameters).pipe(
        expand(paginatedDynamoDBQuery(query, queryParameters)),
        map(result => result.Items),
        map(each(toEventWithStoreMetadata)),
        toArray(),
        map(arrayToFlattenedArray())
      );
    },
    storeEvents: ({ events }) => {
      const items = events.map(toDynamoDBItem);
      return empty;
    },
  };
}

/**
 * Creates a function that recursively queries results from DynamoDB until all results are consumed
 *
 * @param query Query function
 * @param queryParameters Query parameters
 * @returns Function that recursively queries results from DynamoDB until all results are consumed
 * @private
 */
function paginatedDynamoDBQuery(
  query: ReturnType<typeof queryDynamoDB>,
  queryParameters: QueryDynamoDBParameters
): (result: QueryDynamoDBResult) => Observable<QueryDynamoDBResult> {
  return ({ LastEvaluatedKey }) =>
    LastEvaluatedKey !== undefined ? query({ ...queryParameters, ExclusiveStartKey: LastEvaluatedKey }) : empty;
}
