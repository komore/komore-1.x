# IndexedDB

The [IndexedDB API] allows low-level access to a transactional database system.

## Database

The `IDBDatabase` type represents a database handle.

### Create a database

The `createDatabase` function creates an observable `IDBDatabase`:

```ts
import { createDatabase } from '@komore/web/storage/indexeddb';

createDatabase('database-name').subscribe(idbDatabase => {
  console.log('database ready', idbDatabase);
});
```

### Delete a database

The `deleteDatabase` function creates an observable database deletion:

```ts
import { deleteDatabase } from '@komore/web/storage/indexeddb';

deleteDatabase('database-name').subscribe(() => {
  console.log('database deleted');
});
```

### Upgrade a database

The `IDBDatabase.version` property represents the database version number.

The expected database version number can be specified when creating the database observable.

```ts
createDatabase('example', 1).subscribe(idbDatabase => {
  console.log('database ready, version', idbDatabase.version);
});
```

When the expected and actual version numbers do not match, an `upgradeneeded` event is triggered.

### Upgrade handler

The `createDatabase` function takes an optional upgrade handler.

The upgrade handler executes when an `upgradeneeded` event is triggered.

```ts
createDatabase('example', 1, upgradeHandler).subscribe(idbDatabase => {
  console.log('database ready, version', idbDatabase.version);
});

function upgradeHandler(idbUpgrade$: Observable<IDBUpgrade>): Observable<void> {
  return idbUpgrade$.pipe(
    map(({ idbDatabase, oldVersion, newVersion }) => {
      // operations upgrading from oldVersion to newVersion
    })
  );
}
```

The database observable only emits once the upgrade handler has completed the upgrade process.

### Migrations

The `IDBMigration` type holds a script that migrates a database for a single version increment.

An application using migrations must have one script per database version.

The `createIDBMigration` function creates an `IDBMigration` object:

```ts
import { createIDBMigration } from '@komore/web/storage/indexeddb';

const migrationV1 = createIDBMigration(1, idbDatabase => {
  const transaction = idbDatabase.transaction(['store-name-a', 'store-name-b'], 'readwrite');
  // perform migration
  return fromIDBTransaction(transaction);
});
```

The `createIDBUpgradeHandler` turns a list of `IDBMigration` objects into an upgrade handler.

```ts
import { createIDBUpgradeHandler } from '@komore/web/storage/indexeddb';

const upgradeHandler = createIDBUpgradeHandler([
  migrationV1,
  migrationV2,
  migrationV3,
  migrationV4,
  migrationV5,
  migrationV6
]);
```

The `createIDBUpgradeHandler` function turns a list of migrations into an upgrade handler:

```ts
const upgradeHandler = createIDBUpgradeHandler([migration1, migration2, migration3, migration4]);

openDatabase('example', 2, upgradeHandler).subscribe(idbDatabase =>
  console.log('database opened, version', idbDatabase.version)
);
```


## Object stores

The `IDBOjectStore` type represents an object store, i.e. a place where related objects are stored.

## Requests

The `IDBRequest` type represents an IndexedDB request.

### Write items

The `putItem` function puts an item in the database

### Read items

### Observe operations

The `fromIDBRequest` function makes an existing `IDBRequest` observable:

```ts
const idbRequest = idbDatabase.createObjectStore('store');
const idbRequest$ = fromIDBRequest(idbRequest);
```

IndexedDB requests cannot be aborted: unsubscribing from the observable does not abort the request.

## Transactions

A transaction makes it possible to perform multiple operations as an atomic unit.

### Create a transaction

The `IDBDatabase.transaction` function creates a transaction with a `readonly`, `readwrite` or `versionchange`
permission for one or more object stores:

```ts
const idbTransaction = idbDatabase.transaction(['store-name-a', 'store-name-b'], 'readwrite');
```

### Transactional operations

The `IDBTransaction.objectStore` function returns an object store that can be used to perform operations within the
scope of the transaction:

```ts
const objectStore = idbTransaction.objectStore('store-name-a');
objectStore.put(item1);
objectStore.put(item2);
```

### Observe the transaction

```ts

```

has the specified access rights

```ts
openDatabase('database-name').pipe(
  map(idbDatabase => idbDatabase.transaction(['store-name-a', 'store-name-b'], 'readwrite')),
  mergeMap(idbTransaction => {
    idbDatabase.
  });
)
```

## Considerations

IndexedDB is a powerful API, with some particular aspects to keep in mind to ensure everything works smoothly.

### Storage limits

The database does not have an unlimited size, and user experience should be kept in mind when

### Database lifecycle

The database observable created by `openDatabase` is reference counted. This means:

- the database is opened each time the number of subscriptions goes from 0 to 1
- the database is closed each time the number of subscriptions goes from 1 to 0

Opening a database is a slow operation that can impact performance.

For many use cases, applications can keep at least one subscription active all the time.

A simple way to achieve this behavior is via the `shareReplay` RxJS operator with `refCount` set to `false`:

```ts
const database$ = openDatabase('example').pipe(shareReplay({ bufferSize: 1, refCount: false }));
```

### Requests with event listeners

IndexedDB requests with event listeners are slower than the same requests without event listeners.

The `fromIDBRequest` function creates an observable `IDBRequest` by listening to the request's events.

For simple operations, there is normally no visible performance impact.

For complex operations, such as bulk writes with thousands of items, the performance can be greatly degraded.

Creating numerous observable requests results in poor performance:

```ts
createDatabase('database-name')
  .pipe(
    map(idbDatabase => idbDatabase.createObjectStore('object-store-name')),
    mergeMap(objectStore => {
      const putOperations = items.map(item => fromIDBRequest(objectStore.put(item)));
      return forkJoin(putOperations);
    })
  )
  .subscribe(() => {
    console.log('operation completed');
  });
```

Creating a single observable transaction results in better performance:

```ts
createDatabase('database-name')
  .pipe(
    map(idbDatabase => idbDatabase.transaction('object-store-name', 'readwrite')),
    map(idbTransaction => {
      const objectStore = idbTransaction.objectStore('object-store-name');
      items.forEach(item => objectStore.put(item));
      return asObservableIDBTransaction(idbTransaction);
    })
  )
  .subscribe(() => {
    console.log('operation completed');
  });
```

### Web worker

The IndexedDB API is accessible from web workers.

TODO: further details.

[indexeddb api]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
