# Amazon DynamoDB Event Store

[Amazon DynamoDB] is a highly scalable key-value and document database that can be used as a komore [event store] with
[snapshot] support.

## Technical Constraints

Events and aggregates are currently bound to the following DynamoDB limitations:

| Constraint                                | Value     |
|:------------------------------------------|:----------|
| Item size for a stored event item size    | 400 KB    |
| Item size for a stored snapshot item size | 400 KB    |

These constraints may be lifted in future versions of this module.

## Configuration

DynamoDB-based stores require

### Event Store

An event store can be created and configured using the `createDynamoDBEventStore` function.

The provided table and attribute names will be used to access the DynamoDB instance.

```typescript
import { createDynamoDBEventStore } from '@komore/event/store/dynamodb';

const eventStore = createDynamoDBEventStore({
  table: '<table name>',
  attributeNames: {
    aggregateKey: '<aggregate key attribute name>',
    eventData: '<event data attribute name>',
    eventType: '<event type attribute name>',
    sequenceNumber: '<sequence number attribute name>',
    timestamp: '<timestamp attribute name>'
  }
});
```

### Snapshot Store

A snapshot store can be created and configured using the `createDynamoDBSnapshotStore` function.

```typescript
import { createDynamoDBSnapshotStore } from '@komore/event/store/dynamodb';

const snapshotStore = createDynamoDBSnapshotStore({
  table: '<table name>',
  attributeNames: {
    aggregateKey: '<aggregate key attribute name>',
    sequenceNumber: '<sequence number attribute name>',
    state: '<state attribute name>',
    timestamp: '<timestamp attribute name>'
  }
});
```

## Technical Details

### Schema

Events and snapshots are stored as individual items within DynamoDB tables.

For events, the aggregate key is used as the hash key and the sequence number is used as the range key.

For snapshots, the aggregate key is used as the hash key.

### Writes

The store is capable of writing several events and snapshots within a single invocation.

When a


If a command handler generates multiple events within a single invocation - i.e. possibly handling multiple commands -
they will be batched together.

Events are buffered together then sent as a batch when the buffer reaches 25 items or there are no more events that need
to be sent.

If
- 25 events are buffered
- Adding another event to the buffer would make it exceed 16 MB
- Up to 25 events are written per transaction.

If the total size of the events in a transaction exceeds not exce with a maximum of 25 events per transaction.
transactions 25 at a time.

If an event is larger than 400 KB, it will be sent to the repository alone.

### Reads

TODO.

## Constraints




[Amazon DynamodB]: https://aws.amazon.com/dynamodb/
[event store]: /documentation/application/event/dynamodb
[snapshot]: /documentation/application/event/snapshot
