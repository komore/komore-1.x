import { type AwsApiServiceClientOptions } from '@komore/aws';
import { asDynamoDBTableName, createDynamoDBApiClient } from '@komore/aws/dynamodb';
import { createDynamoDBEventRepository, createDynamoDBSnapshotRepository } from '@komore/aws/dynamodb/event-store';
import { testDomain } from '@komore/domain/testing';
import { createEventType, eventProperties, matchEvent } from '@komore/event';
import { createEventStore, snapshotOnCount } from '@komore/event/store';

export function runTableEventStore(clientOptions: AwsApiServiceClientOptions) {
  const apiClient = createDynamoDBApiClient(clientOptions);
  const tableName = asDynamoDBTableName('test-eventstore-table');
  const eventStore = createEventStore({
    event: {
      repository: createDynamoDBEventRepository({ apiClient, eventType: testEvent, tableName }),
      type: testEvent,
    },
    initialValue: { id: 'hello' } as Todo,
    reducer: (state, event) =>
      matchEvent(event, {
        todoCreated: () => state,
        todoDelete: () => state,
        todoModified: () => state,
        todoTitleChanged: () => state,
      }),
    snapshot: {
      repository: createDynamoDBSnapshotRepository<Todo>({ apiClient, tableName }),
      strategy: snapshotOnCount({ count: 2 }),
    },
  });

  eventStore;
}

interface Todo {
  readonly id: string;
}

const testEvent = createEventType(testDomain, {
  todoCreated: eventProperties<{}>(),
  todoModified: eventProperties<{}>(),
  todoTitleChanged: eventProperties<{}>(),
  todoDelete: eventProperties<{}>(),
});
