import { QueryCommand, type QueryCommandInput, type QueryCommandOutput } from '@aws-sdk/client-dynamodb';
import { type Event } from '@komore/event';
import { type EventRepository } from '@komore/event/store';
import { type DynamoDBEventRepositoryConfiguration } from './dynamodb-event-repository-configuration';

/**
 * Exclusive start key type
 */
type ExclusiveStartKeyType = QueryCommandInput['ExclusiveStartKey'];

export function dynamoDBEventRepository(): EventRepository<E> {
  
}

/**
 * DynamoDB event repository
 * @typeparam E Event type
 */
export class DynamoDBEventRepository<E extends Event> implements EventRepository<E> {
  private readonly client = this.configuration.dynamoDBClient;

  /**
   * Class constructor
   * @param configuration DynamoDB event repository onfiguration
   */
  constructor(private readonly configuration: DynamoDBEventRepositoryConfiguration) {}

  /**
   * Loads events from the store
   *
   * If `sequenceStart` is not provided, events are loaded from the first one.
   *
   * If `sequenceEnd` is not provided, events are loaded until the last one.
   *
   * First, a `queryCommandInput` is first prepared. It will be used for all query commands - as all events may not be
   * retrievable with a single command - with its `ExclusiveStartKey` property using the `LastEvaluatedKey` from the
   * previous command's result.
   *
   * The output of each command is directly stored in a buffer so that the creation of the final array with all events
   * can be slightly optimized by reserving all necessary space right away.
   *
   * @param aggregateKey Aggregate key
   * @param sequenceStart Sequence start
   * @param sequenceEnd Sequence end
   * @returns List of events
   */
  async loadEvents(
    aggregateKey: string,
    sequenceStart: number | undefined,
    sequenceEnd: number | undefined
  ): Promise<ReadonlyArray<E>> {
    const queryCommandInput = this.buildQueryCommandInput(aggregateKey, sequenceStart, sequenceEnd);
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
  }

  /**
   * Saves events to the store
   * @param aggregateKey Aggregate key
   * @param events List of events
   * @returns Promise that resolves once the events are stored
   */
  async saveEvents(aggregateKey: string, events: ReadonlyArray<E>): Promise<void> {
    //const result = this.client.send();
  }

  /**
   * Load events starting from an exclusive start key
   * @param queryCommandInput Query command input
   * @param exclusiveStartKey Optional exclusive start key
   * @returns List of events
   */
  private loadEventsFromExclusiveStartKey(
    queryCommandInput: QueryCommandInput,
    exclusiveStartKey: ExclusiveStartKeyType | undefined
  ): Promise<QueryCommandOutput> {
    return this.client.send(
      new QueryCommand({
        ...queryCommandInput,
        ExclusiveStartKey: exclusiveStartKey
      })
    );
  }

  /**
   * Builds a list of items from a list of outputs
   * @param outputs List of outputs
   * @returns List of items
   */
  private buildItemsFromOutputs(outputs: ReadonlyArray<QueryCommandOutput>): ReadonlyArray<E> {
    const totalItems = outputs.reduce((acc, curr) => acc + curr.Items.length, 0);
    const events = Array.from<E>({ length: totalItems });
    let i = 0;

    for (const output of outputs) {
      for (const item of output.Items) {
        const aggregateKey = item[this.configuration.attributeNames.aggregateKey].S;
        const type = item[this.configuration.attributeNames.eventType].S;
        const eventData = JSON.parse(item[this.configuration.attributeNames.eventData].S);
        const sequenceNumber = parseInt(item[this.configuration.attributeNames.sequenceNumber].N, 10);
        const ts = new Date(item[this.configuration.attributeNames.timestamp].S);
        /*events[i++] = {
          type,
          metadata: {
            aggregateKey,
            sequenceNumber,
            ts
          }
        };*/
      }
    }

    return events;
  }

  /**
   * Builds a query command input
   * @param aggregateKey Aggregate key
   * @param sequenceStart Optional sequence start
   * @param sequenceEnd Optional sequence end
   * @returns Query command input
   */
  private buildQueryCommandInput(
    aggregateKey: string,
    sequenceStart: number | undefined,
    sequenceEnd: number | undefined
  ): QueryCommandInput {
    return {
      TableName: this.configuration.tableName,
      KeyConditionExpression: this.buildKeyConditionExpression(sequenceStart !== undefined, sequenceEnd !== undefined),
      ExpressionAttributeNames: {
        '#k': this.configuration.attributeNames.aggregateKey,
        '#s': this.configuration.attributeNames.sequenceNumber
      },
      ExpressionAttributeValues: {
        ':k': {
          S: aggregateKey
        },
        ':ss': sequenceStart !== undefined ? { N: `${sequenceStart}` } : undefined,
        ':se': sequenceEnd !== undefined ? { N: `${sequenceEnd}` } : undefined
      }
    };
  }

  /**
   * Build a key condition expression
   * @param sequenceStart Sequence start
   * @param sequenceEnd Sequence end
   * @returns Key condition expression
   */
  private buildKeyConditionExpression(sequenceStart: boolean, sequenceEnd: boolean): string {
    if (sequenceStart && sequenceEnd) {
      return '#k = :k and #s between :ss and :se';
    } else if (sequenceStart) {
      return '#k = :k and #s >= :ss';
    } else if (sequenceEnd) {
      return '#k = :k and #s <= :se';
    } else {
      return '#k = :k';
    }
  }
}
