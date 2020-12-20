# Server-Sent Events Client

Server-sent events are a simple API used to deliver push messages to a client.

## Creating an event source

The `createEventSource` function returns an observable event source:

```ts
import { createEventSource } from '@komore/web/http/sse';

const sub = createEventSource('https://example.org/').subscribe(event => console.log('event received', event));
```

### Lifecycle

The event source is closed when the subscription is unsubscribed.

If

### Error handling

Event sources are closed

Event sources can automatically reconnect upon failure, using a delay provided by the event source.

For this feature to work, errors must be caught, e.g.:

```ts
createEventSource('https://example.org/')
  .pipe(
    catchError(error => of(undefined)),
    filter(event => event !== undefined)
  )
  .subscribe(event => console.log('event received', event));
```

## Observing an event source

The `observeEventSource` function returns an observable from an existing event source:

```ts
import { observeEventSource } from '@komore/web/http/sse';

const eventSource = new EventSource('https://example.org/');
const sub = observeEventSource(eventSource).subscribe(event => console.log('event received', event));
```

`observeEventSource` does not close the event source when the subscription is unsubscribed, as it does not own the event
source.

The `transferOwnership` option is used to transfer the event source ownership, and close it when unsubscribed:

```ts
observeEventSource(eventSource, { transferOwnership: true });
```

## Web workers

Event sources are supported within [web workers].

Keeping the event source logic within a web worker is recommended as it helps alleviate the main thread.

[web workers]: ./web-worker.md
