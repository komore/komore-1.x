# @komore/web

The `@komore/web` module helps taking advantage of Web APIs.

## Key concepts

- Web APIs are wrapped in a more functional, observable API
- Feature access is not hindered

## Web APIs

The following Web APIs are exposed by the module:

| API                         | Entry-point                     | Description                         |
| :-------------------------- | :------------------------------ | :---------------------------------- |
| [Authentication]            | `@komore/web/authentication`    | [Web Authentication API]            |
| [Gamepad]                   | `@komore/web/gamepad`           | [Gamepad API]                       |
| [HTTP client]               | `@komore/web/http`              | [Fetch API]                         |
| [IndexedDB]                 | `@komore/web/storage/indexeddb` | [IndexedDB API]                     |
| [Server-Sent Events client] | `@komore/web/http/sse`          | [Server-Sent Events API]            |
| [WebSocket client]          | `@komore/web/http/websocket`    | [WebSocket API]                     |
| [Web Storage]               | `@komore/web/storage`           | [Web Storage API] and [Storage API] |
| [Web Workers]               | `@komore/web/worker`            | [Web Workers API]                   |

[gamepad]: ./web-gamepad.md
[http client]: ./web-http.md
[indexeddb]: ./web-storage-indexeddb.md
[server-sent events client]: ./web-http-sse.md
[websocket client]: ./web-http-websocket.md
[web storage]: ./web-storage.md
[web workers]: ./web-worker.md
[fetch api]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[indexeddb api]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[server-sent events api]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events
[storage api]: https://developer.mozilla.org/en-US/docs/Web/API/Storage_API
[websocket api]: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
[web authentication api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API
[web storage api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
[web workers api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
