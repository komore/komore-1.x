# Worker Usage

## Creating a worker

### Dedicate worker

The [`createWorker()`] function creates a [dedicated worker].

```ts
import { createWorker } from '@komore/web/worker';

const scriptUrl = new URL('worker.js');
const [observer, observable] = createWorker(scriptUrl);
```

### Shared worker

The [`createSharedWorker()`] function creates a [shared worker].

```ts
import { createSharedWorker } from '@komore/web/worker';

const scriptUrl = new URL('worker.js');
const [observer, observable] = createSharedWorker(scriptUrl);
```

### Existing worker

The [`toWorker()`] function creates an observer from an existing dedicated or shared worker.

```ts
import { toWorker } from '@komore/web/worker';

const worker: Worker | SharedWorker;
const observer = toWorker(worker);
```

The [`fromWorker()`] function creates an observable from an existing dedicated or shared worker.

```ts
import { fromWorker } from '@komore/web/worker';

const worker: Worker | SharedWorker;
const observable = fromWorker(worker);
```

### Observer

The observer created by `createWorker()` or `createSharedWorker()` posts messages to the worker.

The `next()` method posts a message to the worker:

```ts
observer.next({ property: 'value' });
```

The `next()` method can also be used with a pair that represents the message and a list of [transferable references]:

```ts
const largeResource: T;
const message = {
  property1: largeResource,
  property2: 'value'
}
observer.next([message, [largeResource]]);
```

The `complete()` method [terminates] a dedicated worker or [closes the port] of a shared worker.

### Observable

The observable created by `createWorker()` or `createSharedWorker()` emits messages posted by the worker.

```ts
import { }
```

## Defining a worker

## Example

This example describes the creation of a dedicated worker that computes the factorial of numbers it receives.

- Defines a dedicated worker
  - That listens for incoming numbers

  - That computes the factorial of each received number and posts it alongside the received number
- Creates a dedicated worker
- Listens for received numbers and logs them to the console
- Posts 10 numbers to the worker over 10 seconds
- Prevents completing the observer as this would terminate the worker

### Definition

The dedicated worker subscribes to incoming messages and computes the factorial.

It then posts the result via the observer.

```ts
import { fromWorkerMessage } from '@komore/web/worker';

type Incoming = number;
type Outgoing = [value: number, factorial: number];

fromWorkerMessage<Incoming>().pipe(
  mapToMessageData(),
  map(value => [value, ])
).subscribe(observer);
```

### Creation

```ts
import { range } from '@komore/reactive';
import { delay, neverComplete, tapValue, tapCompletion } from '@komore/reactive/operators';
import { mapToMessageData } from '@komore/web/operators';
import { createWorker } from '@komore/web/worker';

type Outgoing = number;
type Incoming = [value: number, factorial: number];

const scriptUrl = new URL('example.js');
const [observer, observable] = createWorker<Outgoing, Incoming>(scriptUrl);

observable.pipe(
  mapToMessageData(),
  tapValue(([n, fact]) => console.log(`${n}! = ${fact}`)),
  tapCompletion(() => console.log('worker completed'))
).subscribe();

range(1, 10).pipe(
  delay(1000),
  neverComplete()
).subscribe(observer);
```

### Shared worker variant

When using a shared worker, the creation remains similar apart from using [`createSharedWorker()`] instead of
`createWorker()`.

The definition of the worker is slightly different, as multiple connections may be established.

Once a connection is established, the worker listens to its messages.

```ts
fromSharedWorkerConnection().pipe(
  mergeMap(port => fromSharedWorkerMessage(port).pipe(
      tap(toWorkerPort(port))
  ))
)
```

Note: the `concurrent` parameter of `mergeMap()` can be used to control the shared worker's parallelism level.

[`createworker()`]: ../../modules/web/worker/src/create-worker.ts
[`createsharedworker()`]: ../../modules/web/worker/src/create-shared-worker.ts
[`fromworker()`]: ../../modules/web/worker/src/from-worker.ts
[`toworker()`]: ../../modules/web/worker/src/to-worker.ts
[dedicated worker]: ./web-worker.md#dedicated-worker
[shared worker]: ./web-worker.md#shared-worker
[transferable references]: ./x.md
