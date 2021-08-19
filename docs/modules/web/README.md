# @komore/web

The `@komore/web` module helps taking advantage of Web APIs.

## Key concepts

- Web APIs are wrapped in a more functional, observable API
- Feature access is not hindered

## Web APIs

The following Web APIs are exposed by the module:

| API                  | Entry-point                     | Description                         |
| :------------------- | :------------------------------ | :---------------------------------- |
| [Authentication]     | `@komore/web/authentication`    | [Web Authentication API]            |
| [Gamepad]            | `@komore/web/gamepad`           | [Gamepad API]                       |
| [Geolocation]        | `@komore/web/geolocation`       | [Geolocation API]                   |
| [HTTP client]        | `@komore/web/http`              | [Fetch API]                         |
| [IndexedDB]          | `@komore/web/storage/indexeddb` | [IndexedDB API]                     |
| [Notifications] | `@komore/web/notification` | [Notifications API] |
| [Server-Sent Events] | `@komore/web/http/sse`          | [Server-Sent Events API]            |
| [WebSockets]         | `@komore/web/http/websocket`    | [WebSocket API]                     |
| [Web Storage]        | `@komore/web/storage`           | [Web Storage API] and [Storage API] |
| [Web Workers]        | `@komore/web/worker`            | [Web Workers API]                   |

[gamepad]: ./gamepad/README.md
[fetch api]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[geolocation]: ./geolocation/README.md
[geolocation api]: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
[http client]: ./http/README.md
[indexeddb]: ./storage/indexeddb/README.md
[indexeddb api]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[server-sent events]: ./http/server-sent-events.md
[server-sent events api]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events
[storage api]: https://developer.mozilla.org/en-US/docs/Web/API/Storage_API
[websocket api]: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
[websockets]: ./http/websockets.md
[web authentication api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API
[web storage]: ./storage/README.md
[web storage api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
[web workers]: ./worker/README.md
[web workers api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
