# komore Web

Web APIs: TODO.

- [Authentication](#authentication)
- [Form](#form)
- [Geolocation](#geolocation)
- [HTTP](#http)
  - [Server-Sent Events](#server-sent-events)
  - [WebSocket](#websocket)
- [Observers](#observers)
- [Payment](#payment)
- [Router](#router)

## Authentication

## Form

## Geolocation

## HTTP

The `@komore/web/http` module exports helper functions th

### Server-Sent Events

The `@komore/web/http/sse` module exports an observable event source:

```typescript
import { eventSource } from '@komore/web/http/sse';

eventSource('<url>').pipe(
  map(event => formatEvent(event)),
  filter(({ type }) => event.type === 'my-event-type')
).subscribe(event => console.log('event received', event));
```

### WebSocket

The `@komore/web/http/websocket` module exports an observable WebSocket client.

```typescript
import 
```

## Observers

The `@komore/web/observer` module exports helper functions that can be used to create observable observers:

| Observer Type           | Function                 |
| :---------------------- | :----------------------- |
| [Intersection observer] | `observeIntersections()` |
| [Mutation observer]     | `observeMutations()`     |
| [Performance observer]  | `observePerformance()`   |
| [Resize observer]       | `observeResizes()`       |

## Payment

TODO.

## Router

TODO

```typescript
import { route$, withRoute } from '@komore/web/router';

const element = elementHtml`
  <nav></nav>
  <main>
    ${}
  </main>
`;
const output$ = route$.pipe(
  forRoute('/path/:id', () => importElement('')),
  forRoute('/path'),
  defaultRoute()
);
```


[event source]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events
[intersection observer]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
[mutation observer]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
[performance observer]: https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver
[resize observer]: https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API
