import { QueryCommand, type QueryCommandInput, type QueryCommandOutput } from '@aws-sdk/client-dynamodb';
import { type Event } from '@komore/event';
import { type EventStoreEventRepository } from '@komore/event/store';

import { createDynamoDBEventLoader } from './create-dynamodb-event-loader';
import { type DynamoDBEventRepositoryOptions } from './dynamodb-event-repository-options';

/**
 * Exclusive start key type
 */
type ExclusiveStartKeyType = QueryCommandInput['ExclusiveStartKey'];

/**
 * Creates a DynamoDB event repository
 *
 * @param options DynamoDB event repository options
 * @returns DynamoDB event repository
 */
export function createDynamoDBEventRepository<
  EventTypes extends Array<Event<string, Record<string, unknown> | undefined>>,
>(options: DynamoDBEventRepositoryOptions): EventStoreEventRepository<EventTypes> {
  // TODO
  const loadEvents = createDynamoDBEventLoader(options.tableName);
  return undefined as unknown as EventRepository<EventTypes>;
}

/**
 * DynamoDB event repository
 * @template E Event type
 */
export class DynamoDBEventRepository<E extends Event> implements EventRepository<E> {
  private readonly client = this.configuration.dynamoDBClient;

  /**
   * Class constructor
   * @param configuration DynamoDB event repository onfiguration
   */
  constructor(private readonly configuration: DynamoDBEventRepositoryConfiguration) {}

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
        ExclusiveStartKey: exclusiveStartKey,
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
}
