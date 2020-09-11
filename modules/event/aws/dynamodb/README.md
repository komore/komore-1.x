# Amazon DynamoDB event store

Support for [Amazon DynamoDB] as a [komore] event store.

## Technical Details

TODO.

### Schema

The DynamoDB table is created with an aggregate key as the hash key and the event sequence number as the range key.

### Writes

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


[Amazon DynamodB]: https://aws.amazon.com/dynamodb/
[komore]: https://komore.dev
