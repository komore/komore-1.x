# komore Store Module

Bounded context: a STORE (DynamoDB table)
Aggregate: a list of ACTIONS relevant to a specific ?subject? within a bounded context (a key in the DynamoDB table)
Aggregate boundaries: how the store (a list of actions) is segmented to result into multiple aggregates (eg Users store => User aggregate with the userId as the boundary key)

Event: ?between domains/contexts?
Bounded context | Action | bounded context |
Event = between contexts?

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
   3. API-REQUEST delegates to an API-FUNCTION (e.g. AppSync resolver or API Gateway integration)
   4. API-FUNCTION maps the API-REQUEST to a COMMAND
   5. API-FUNCTION stores the COMMAND in a COMMAND-STORE
      c. This step is necessary as the API-REQUEST itself does not allow an AGGREGATE to always be mapped to the same COMMAND-FUNCTION instance
2. COMMAND-FUNCTION receives a COMMAND from the COMMAND-STORE
3. COMMAND-FUNCTION maps the COMMAND to an EVENT-STORE (a DynamoDB table with consistent read)
4. COMMAND-FUNCTION maps the COMMAND to an AGGREGATE-KEY (a DynamoDB hash attribute value)
5. COMMAND-FUNCTION retrieves the list of EVENT's
   a. If snapshots are disabled:
   1. all EVENT's are retrieved from EVENT-STORE using AGGREGATE-KEY
      b. If snapshots are enabled:
   1. COMMAND-FUNCTION maps the EVENT-STORE to an EVENT-SNAPSHOT-STORE
   1. COMMAND-FUNCTION loads the SNAPSHOT-EVENT for the AGGREGATE-KEY from the SNAPSHOT-EVENT-STORE
   1. COMMAND-FUNCTION loads all EVENT's from EVENT-STORE using AGGREGATE-KEY and starting after SNAPSHOT-EVENT
6. COMMAND-FUNCTION applies the EVENT-REDUCER over the list of EVENT's
   and an AGGREGATE-KEY (a DynamoDB table with consistent read and a partition key) from the COMMAND
   a. for
7. COMMAND maps to
   to a REDUCER-FUNCTION resolver (an AWS Lambda)
8. REDUCER-FUNCTION maps the COMMAND to an EVENT
9. REDUCER-FUNCTION maps the COMMAND to an EVENT-STORE and an EVENT-STORE-KEY (DynamoDB table with consistent read, and a partition key)
10. REDUCER-FUNCTION loads a list of PREVIOUS-EVENT's from the EVENT-STORE using the EVENT-STORE-KEY (with the sort key)
11. REDUCER-FUNCTION runs the REDUCER over the PREVIOUS-EVENT's and the EVENT to generate a STATE
    a. On success:
    - If some criteria are met (elapsed time, number of actions or aggregate size)
      - a SNAPSHOT-EVENT is generated with the STATE
    - The list of EVENT's are saved into the EVENT-STORE usin gthe EVENT-STORE-KEY - a check exists to ensure no changes have been made since step 4 (via expectedVersion / optimistic concurrency control)
      b. On failure:
    - The result is discarded and an error is raised all the way back to the API

reduces all actions

1. GraphQL maps to insert into a store of actions (one per domain), i.e. a DynamoDB table
2. The DynamoDB table features a stream; the stream remains available for 24 hours
3. A reducer lambda with dynamodb:DescribeStream/GetRecords/GetShardIterator/ListStreams permissions gets each new action
4. A archive lambda with
5. DynamoDB stream with all actions, the stream is only available for 24 hours

6. From the actions, map to a key that will make it possible to find previous actions
7. Retrieve those actions
8.
9. Get all applicable actions (using some relevant key)

```typescript
// reducer (without better syntax)
function reducer(action: Action, previousState: ExampleState = initialState): ExampleState {}

// save emitted actions
store.save(actions);
```
