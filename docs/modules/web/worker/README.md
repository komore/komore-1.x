# Web Workers

The `@komore/web/worker` module provides a reactive interface around the [Web Workers API].

## Key concepts

- Web workers are scripts executed in background threads
- They can perform tasks without interfering with the user interface thread
- Workers run in their own independent context and do not have access to `window` or the DOM
- Workers can spawn other workers, for example to distribute load across multiple threads

MDN offers extensive documentation about the [Web Workers API].

## Worker types

There are multiple types of workers, with different scopes and behaviors.

### Dedicated worker

### Shared worker

### Service worker

A [service worker] acts as a .

## Usage

```ts
import { createWorker } from '@komore/web/worker';

const url = new URL('worker.js');
const [observer, observable] = createWorker(url);

// post a message
observer.next(message);
// stream towards the worker
$.subscribe(observer);
// terminate the worker
observer.complete();
```

[service worker]: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
[web workers api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
