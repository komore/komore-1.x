# Examples

## Compute factorials

This example describes the creation of a dedicated worker that computes the factorial of each number it receives.

- defines a dedicated worker that
  - listens for incoming numbers;
  - computes the factorial of each received number; and
  - posts it alongside the received number
- creates a dedicated worker that
  - listens for received numbers;
  - logs them to the console; and
  - posts 10 numbers to the worker over 10 seconds

> :warning: This example build the `worker.ts` source separately in order to generate an independent `worker.js` script.

### Define the message data types

The worker posts and receives message that have a payload.

[include-source](../../../../modules/web/worker/examples/compute-factorials/src/types.ts)

`ComputationInput` is a simple `number`.

`ComputationResult` holds both the computation inpput and the computed factorial.

### Implement the factorial function

The factorial function computes a `ComputationResult` from a `ComputationInput`.

[include-source:3-10](../../../../modules/web/worker/examples/compute-factorials/src/compute-factorial.ts)

### Define the worker

The [`defineWorker()`] function is used to create:

- an observable that emits received messages
- an observer that can post messages from the worker

[include-source:7](../../../../modules/web/worker/examples/compute-factorials/src/index.ts)

A pipe is then created and subscribed to, where:

- the message event's data is extracted;
- the factorial is computed; and
- the observer posts the result

[include-source:9-12](../../../../modules/web/worker/examples/compute-factorials/src/index.ts)

### Create the worker

The [`createWorker()`] function is used to create

```ts
import { delay, range, neverComplete, tapValue, tapCompletion } from '@komore/reactive';
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
[`createWorker()`].

The definition of the worker is slightly different, as multiple connections may be established.

Once a connection is established, the worker listens to its messages.

```ts
fromSharedWorkerConnection().pipe(
  mergeMap(port => fromSharedWorkerMessage(port).pipe(
      tap(toWorkerPort(port))
  ))
)
```

> :information_source: The `concurrent` parameter of `mergeMap()` can be used to control the shared worker's parallelism
level.

[`createsharedworker()`]: ../../../../modules/web/worker/src/create-shared-worker.ts
[`createworker()`]: ../../../../modules/web/worker/src/create-worker.ts
[`defineworker()`]: ../../../../modules/web/worker/src/define-worker.ts
[`maptomessageeventdata()`]: ../../../../modules/web/operators/src/map-to-message-event-data.ts
