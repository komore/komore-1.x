# Amazon Aurora

[Amazon Aurora] is a MySQL and PostgreSQL-compatible serverless relational database.

## Overview

```typescript
import { RDSDataClient } from '@aws-sdk/client-rds-data';
import { executeStatement, executeTransaction, withAuroraClient } from '@komore/integration-amazon/aurora/operators';

message$.pipe(
  withAuroraClient(new RDSDataClient({
    database: process.env.AURORA_DATABASE_NAME,
    resourceArn: process.env.AURORA_RESOURCE_ARN,
    schema: process.env.AURORA_DATABASE_SCHEMA,
    secretArn: process.env.AURORA_SECRET_ARN
  })),
  executeTransaction([
    executeStatement('INSERT INTO books (title) VALUES (:title)', {
      title: selectParameter('bookTitle')
    }),
    executeStatement('INSERT INTO book_authors (book_id, author_id) VALUES (:bookId, :authorId)', {
      bookId: lastInsertId(),
      authorId: selectParameter('authorId')
    })
  ]),
  executeStatement('SELECT COUNT(*) AS total FROM books')
)
```

## Client

Aurora operators require messages with a configured RDS Data client.

```typescript
import { RDSDataClient } from '@aws-sdk/client-rds-data';
import { withAuroraClient } from '@komore/integration-amazon/aurora/operators';

message$.pipe(
  withAuroraClient(new RDSDataClient({
    database: process.env.AURORA_DATABASE_NAME,
    resourceArn: process.env.AURORA_RESOURCE_ARN,
    schema: process.env.AURORA_DATABASE_SCHEMA,
    secretArn: process.env.AURORA_SECRET_ARN
  }))
);
```

More information regarding the RDS Data client parameters can be found in the [deployment](#deployment) chapter.

## Statements

A single statement is executed using the `executeStatement` operator.

```typescript
import { executeSql } from '@komore/integration-aws/aurora';

withAuroraClient$.pipe(
  executeSql('SELECT COUNT(*) as total FROM books')
);
```

### Passing Named Parameters

Named parameters are prefixed with `:`. The `parameters` object passed to `executeStatement` must include properties for
each named parameter.

Named parameters can be primitive types - `null`, `boolean`, `number`, `string` - or a function. Using a function allows
selecting parameters from the message.

```typescript
withAuroraClient$.pipe(
  executeSql('INSERT INTO authors (title, year, type, available) VALUES (:title, :year, :type, :available)', {
    title: selectParameters('bookTitle'),
    year: 2020,
    type: 'sf',
    available: false
  })
);
```

### Accessing Results

Results are automatically stored in the message and can be accessed using the `selectRows

```typescript
import { executeSql } from '@komore/integration-aws/aurora';
import { mapResult } from '@komore/message/operators';

$.pipe(
  executeSql('SELECT COUNT(*) as total FROM books'),
  mapResult()
);
```

Named parameters are prefixed with `:`. The object passed to `executeSql` must include a property matching the named
parameter.

Named parameters can be primitive types or a function. Using a function allows selecting from the message.

```typescript
$.pipe(
  executeSql('INSERT INTO authors (name) VALUES (:authorName)', { authorName: ({ parameters }) => parameters.authorName})
);
```

## Executing a Transaction

Statements can be executed within a transaction using the `executeTransaction` and `executeSql` functions.

```typescript
import { executeStatement, executeTransaction } from '@komore/integration-aws/aurora';

$.pipe(
  executeTransaction([
    executeSql('SELECT id FROM authors WHERE name = :authorName', { authorName: 'John Smith' }),
    executeSql('INSERT INTO books (title, author_id) VALUES (:title, :authorId)', {
      title: 'Reactive Programming',
      authorId: ({ id }) => id
    })
  ])
)
```

## Low-Level Commands

| Function                | API                                                                                                                    |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------|
| `batchExecuteStatement` | [BatchExecuteStatement](https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BatchExecuteStatement.html) |
| `beginTransaction`      | [BeginTransaction](https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectText.html)                              |
| `executeStatement`      | [ExecuteStatement](https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_ExecuteStatement.html)           |
| `commitTransaction`     | [CommitTransaction](https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html)         |
| `rollbackTransaction`   | [RollbackTransaction](https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html)     |

## Recipes

TODO.

## Deployment

TODO.



[Amazon Aurora]: https://aws.amazon.com/rds/aurora/
