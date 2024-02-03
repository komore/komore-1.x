import { type Event } from '@komore/event';

import { eventLoadRequestToDynamoDBEventQueryCommandInput } from './event-load-request-to-dynamodb-query-command-input';

/**
 * Creates a function that loads events from the store
 *
 * If `sequenceStart` is not provided, events are loaded from the first one.
 *
 * If `sequenceEnd` is not provided, events are loaded until the last one.
 *
 * First, a `queryCommandInput` is prepared. It will be used for all query commands - as all events may not be
 * retrievable with a single command - with its `ExclusiveStartKey` property using the `LastEvaluatedKey` from the
 * previous command's result.
 *
 * The output of each command is directly stored in a buffer so that the creation of the final array with all events
 * can be slightly optimized by reserving all necessary space right away.
 *
 * @param tableName Table name
 * @returns Function that loads events from the store
 */
export function createDynamoDBEventLoader<EventTypes extends Event<string, Record<string, unknown> | undefined>[]>(
  tableName: string
): (
  aggregateKey: string,
  sequenceStart: number | undefined,
  sequenceEnd: number | undefined
) => Observable<ReadonlyArray<EventTypes>> {
  const toCommandInput = eventLoadRequestToDynamoDBEventQueryCommandInput(tableName, attributeNames);
  return (aggregateKey, sequenceStart, sequenceEnd) => {
    const queryCommandInput = toCommandInput(aggregateKey, sequenceStart, sequenceEnd);
    const outputs: Array<QueryCommandOutput> = [];
    let exclusiveStartKey: ExclusiveStartKeyType | undefined;

    do {
      const output = await this.loadEventsFromExclusiveStartKey(queryCommandInput, exclusiveStartKey);

      if ((output.Items?.length ?? 0) > 0) {
        outputs.push(output);
      }

      exclusiveStartKey = output.LastEvaluatedKey;
    } while (exclusiveStartKey !== undefined);

    return this.buildItemsFromOutputs(outputs);
  };
}
