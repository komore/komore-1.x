# komore Event Module

## Available Event Stores

komore comes pre-packaged with well-established storage systems that can be used to store events and snapshots.

| Class                   | Package                      | Environment | Type      | Description                    |
|:------------------------|:-----------------------------|:------------|:----------|:-------------------------------|
| `DynamoDBEventStore`    | `@komore/event/aws/dynamodb` | [AWS]       | Events    | Amazon DynamoDB event store    |
| `DynamoDBSnapshotStore` | `@komore/event/aws/dynamodb` | [AWS]       | Snapshots | Amazon DynamoDB snapshot store |

[Additional event stores can be created]... TODO



[Additional event stores can be created](https://komore.dev/../../docs)







Bounded context: a STORE (DynamoDB table)
Aggregate: a list of ACTIONS relevant to a specific ?subject? within a bounded context (a key in the DynamoDB table)
Aggregate boundaries: how the store (a list of actions) is segmented to result into multiple aggregates (eg Users store => User aggregate with the userId as the boundary key)

Event: ?between domains/contexts?
Bounded context | Action | bounded context | 
Event = between contexts?

/!\ AWS SDK is already available in the lambda host environment:
- could avoid packaging it
- but that means having no control over version changes


### Bounded Context

e.g.: articles, users, newsletters, paywalls, domains, portfolios, etc.

- A GraphQL schema for all mutations and queries specific to the bounded context
- A `commands` DynamoDB table where commands are stored and streamed to a command function with a retry policy

### Mutations

#### 1. AppSync

GraphQL mutation mapping to DynamoDB `commands` tables (one per bounded context).


#### 2. DynamoDB

DynamoDB table holding commands and providing streams for 


### Queries

### Mapping

- API-REQUEST: GraphQL mutation or REST write operation, i.e. POST/PUT/PATCH/DELETE
- API-FUNCTION: a function that maps an API-REQUEST to a COMMAND
- COMMAND: a command performed by the client wishing to modify a part of the application state; the command includes permissions/etc. as metadata
- COMMAND-STORE: a store holding commands for a domain, e.g. a DynamoDB, a Kinesis stream or an SQS queue
- COMMAND-FUNCTION: a function that processes a COMMAND

1. API-REQUEST stores a COMMAND in the relevant COMMAND-STORE via multiple possible mechanisms:
  a. Best:
    1. API-REQUEST maps to a COMMAND (e.g. AppSync or API Gateway using a mapping template)
    2. API-REQUEST stores the COMMAND in a COMMAND-STORE
  b. Worst:
    1. API-REQUEST delegates to an API-FUNCTION (e.g. AppSync resolver or API Gateway integration)
    2. API-FUNCTION maps the API-REQUEST to a COMMAND
    3. API-FUNCTION stores the COMMAND in a COMMAND-STORE
  c. Going through the COMMAND-STORE is necessary as the API-REQUEST itself does not ensure an AGGREGATE to always be mapped to the same COMMAND-FUNCTION instance
2. COMMAND-FUNCTION receives a COMMAND from the COMMAND-STORE
3. COMMAND-FUNCTION maps the COMMAND to an EVENT-STORE (a DynamoDB table with consistent read)
4. COMMAND-FUNCTION maps the COMMAND to an AGGREGATE-KEY (a DynamoDB hash attribute value)
5. COMMAND-FUNCTION retrieves the list of EVENT's
  a. If snapshots are disabled:
    1. COMMAND-FUNCTION loads all EVENT's from EVENT-STORE using AGGREGATE-KEY
    2. COMMAND-FUNCTION uses the defined INITIAL-STATE as the initial REDUCER-FUNCTION state
  b. If snapshots are enabled:
    1. COMMAND-FUNCTION maps the EVENT-STORE to an EVENT-SNAPSHOT-STORE
    2. COMMAND-FUNCTION loads the EVENT-SNAPSHOT for the AGGREGATE-KEY from the EVENT-SNAPSHOT-STORE
    3. COMMAND-FUNCTION loads all EVENT's from EVENT-STORE using AGGREGATE-KEY and a SEQUENCE-NUMBER higher than the EVENT-SNAPSHOT
    4. COMMAND-FUNCITON uses the EVENT-SNAPSHOT as the initial REDUCER-FUNCTION state

2. COMMAND maps to 
to a REDUCER-FUNCTION resolver (an AWS Lambda)
2. REDUCER-FUNCTION maps the COMMAND to an EVENT
3. REDUCER-FUNCTION maps the COMMAND to an EVENT-STORE and an EVENT-STORE-KEY (DynamoDB table with consistent read, and a partition key)
4. REDUCER-FUNCTION loads a list of PREVIOUS-EVENT's from the EVENT-STORE using the EVENT-STORE-KEY (with the sort key)
5. REDUCER-FUNCTION runs the REDUCER over the PREVIOUS-EVENT's and the EVENT to generate a STATE
  a. On success:
    - If some criteria are met (elapsed time, number of actions or aggregate size)
      - a SNAPSHOT-EVENT is generated with the STATE
    - The list of EVENT's are saved into the EVENT-STORE usin gthe EVENT-STORE-KEY
      - a check exists to ensure no changes have been made since step 4 (via expectedVersion / optimistic concurrency control)
  b. On failure:
    - The result is discarded and an error is raised all the way back to the API



reduces all actions 
1. GraphQL maps to insert into a store of actions (one per domain), i.e. a DynamoDB table
2. The DynamoDB table features a stream; the stream remains available for 24 hours
3. A reducer lambda with dynamodb:DescribeStream/GetRecords/GetShardIterator/ListStreams permissions gets each new action
4. A archive lambda with 
1. DynamoDB stream with all actions, the stream is only available for 24 hours

1. From the actions, map to a key that will make it possible to find previous actions
2. Retrieve those actions
3. 
1. Get all applicable actions (using some relevant key)


```typescript

// reducer (without better syntax)
function reducer(action: Action, previousState: ExampleState = initialState): ExampleState {

}

// save emitted actions
store.save(
  actions
)


https://aws.amazon.com/blogs/compute/new-aws-lambda-controls-for-stream-processing-and-asynchronous-invocations/
https://blog.devadvice.io/serverless-event-sourcing-in-aws-lambda-dynamodb-sqs/
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.Tutorial.html
https://aws.amazon.com/blogs/database/automatically-archive-items-to-s3-using-dynamodb-time-to-live-with-aws-lambda-and-amazon-kinesis-firehose/


Concurrency:
- 1 shard = 1 concurrent lambda execution
- Sharding requires the right key to be used in order to avoid parallel executions for a key








For reference:

empty function:

REPORT RequestId: 57edd8e8-169f-4858-bf07-46e79ef69199  Duration: 597.39 ms     Billed Duration: 600 ms Memory Size: 128 MB     Max Memory Used: 109 MB Init Duration: 829.00 ms
START RequestId: 01a473cd-c4c8-4d3d-8be8-b54ce8d1643c Version: $LATEST
END RequestId: 01a473cd-c4c8-4d3d-8be8-b54ce8d1643c
REPORT RequestId: 01a473cd-c4c8-4d3d-8be8-b54ce8d1643c  Duration: 51.04 ms      Billed Duration: 100 ms Memory Size: 128 MB     Max Memory Used: 64 MB  Init Duration: 137.37 ms
START RequestId: 47f4ce3b-9020-4049-9987-4ca909da1aee Version: $LATEST
END RequestId: 47f4ce3b-9020-4049-9987-4ca909da1aee
REPORT RequestId: 47f4ce3b-9020-4049-9987-4ca909da1aee  Duration: 36.78 ms      Billed Duration: 100 ms Memory Size: 128 MB     Max Memory Used: 64 MB
START RequestId: d7052381-b95f-4c4a-bc01-3a664ec67144 Version: $LATEST
END RequestId: d7052381-b95f-4c4a-bc01-3a664ec67144
REPORT RequestId: d7052381-b95f-4c4a-bc01-3a664ec67144  Duration: 1.09 ms       Billed Duration: 100 ms Memory Size: 128 MB     Max Memory Used: 64du -s MB
START RequestId: e11414a0-0677-4884-befe-dfb95dd38051 Version: $LATEST
END RequestId: e11414a0-0677-4884-befe-dfb95dd38051
REPORT RequestId: e11414a0-0677-4884-befe-dfb95dd38051  Duration: 12.80 ms      Billed Duration: 100 ms Memory Size: 128 MB     Max Memory Used: 65 MB
START RequestId: 9ac68d29-b20c-4d5d-8ce8-6476cac49434 Version: $LATEST
END RequestId: 9ac68d29-b20c-4d5d-8ce8-6476cac49434
REPORT RequestId: 9ac68d29-b20c-4d5d-8ce8-6476cac49434  Duration: 1.13 ms       Billed Duration: 100 ms Memory Size: 128 MB     Max Memory Used: 65 MB
START RequestId: 9819680b-6b87-410b-8292-defd8d0632ae Version: $LATEST
END RequestId: 9819680b-6b87-410b-8292-defd8d0632ae
REPORT RequestId: 9819680b-6b87-410b-8292-defd8d0632ae  Duration: 18.05 ms      Billed Duration: 100 ms Memory Size: 128 MB     Max Memory Used: 65 MB

