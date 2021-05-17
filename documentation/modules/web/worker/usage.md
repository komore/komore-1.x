# Worker Usage

## Creating a worker

### Dedicated worker

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

TODO.

[`createsharedworker()`]: ../../../../modules/web/worker/src/create-shared-worker.ts
[`createworker()`]: ../../../../modules/web/worker/src/create-worker.ts
[`fromworker()`]: ../../../../modules/web/worker/src/from-worker.ts
[`toworker()`]: ../../../../modules/web/worker/src/to-worker.ts
[dedicated worker]: ./README.md#dedicated-worker
[shared worker]: ./web-worker.md#shared-worker
[transferable references]: ./TODO.md
