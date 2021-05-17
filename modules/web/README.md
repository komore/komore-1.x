# @komore/web

[![NPM version](https://img.shields.io/npm/v/@komore/web)](https://www.npmjs.com/package/@komore/web)

[komore] module that wraps Web APIs in observable streams and observers.

## Install

The module can be installed via Npm, pnpm or Yarn:

```sh
npm install @komore/web --save
```

```sh
pnpm add @komore/web
```

```sh
yarn add @komore/web
```

## Available APIs

The following APIs are exposed by the module:

| Web API                     | Module                            | Documentation           |
| :-------------------------- | :-------------------------------- | :---------------------- |
| [Authentication API]        | [`@komore/web/authentication`]    |                         |
| [Bluetooth API]             | [`@komore/web/bluetooth`]         |                         |
| [Fetch API]                 | [`@komore/web/http`]              |                         |
| [Fullscreen API]            | [`@komore/web`]                   |                         |
| [Gamepad API]               | [`@komore/web/gamepad`]           |                         |
| [Geolocation API]           | [`@komore/web/geolocation`]       |                         |
| [Image Capture API]         | [`@komore/web/media`]             |                         |
| [IndexedDB API]             | [`@komore/web/storage/indexeddb`] |                         |
| [Intersection Observer API] | [`@komore/web/observer`]          | [Intersection observer] |
| [Mutation Observer API]     | [`@komore/web/observer`]          | [Mutation observer]     |
| [Permissions API]           | [`@komore/web/permission`]        |                         |
| [Page Visibility API]       | [`@komore/web`]                   |                         |
| [Picture-in-Picture API]    | [`@komore/web/media`]             |                         |
| [Push API]                  | [`@komore/web/push`]              |                         |
| [Resize Observer API]       | [`@komore/web/observer`]          | [Resize observer]       |
| [HTML Sanitizer API]        | [`@komore/web/operators`]         |                         |
| [Screen Capture API]        | [`@komore/web/media`]             |                         |
| [Screen Wake Lock API]      | [`@komore/web`]                   |                         |
| [Server-Sent Events API]    | [`@komore/web/http/sse`]          |                         |
| [Vibration API]             | [`@komore/web/vibration`]         |                         |
| [WebSockets API]            | [`@komore/web/http/websocket`]    |                         |

Full documentation is available at the [komore website].

[komore]: https://komore.dev
[komore website]: https://komore.dev/modules/web
[`@komore/web/authentication`]: https://komore.dev/modules/web/authentication
[`todo indexeddb`]: https://komore.dev/modules/web/storage/indexeddb
[`todo pip`]: https://komore.dev/modules/web/media#picture-in-picture
[`todo screencapture`]: https://komore.dev/modules/web/media#screen-capture
[`todo push`]: https://komore.dev/modules/web/push
[`captureimage`]: https://komore.dev/modules/web/media#image-capture
[`createeventsource`]: https://komore.dev/modules/web/http/sse
[`createhttpclient`]: https://komore.dev/modules/web/http
[`createscreenwakelock`]: https://komore.dev/modules/web#screen-wake-lock
[`createvibrationobserver`]: https://komore.dev/modules/web/vibration
[`createwebsocket`]: https://komore.dev/modules/web/http/websocket
[`sanitizehtml`]: https://komore.dev/modules/web/operators#html-sanitization
[`watchfullscreenchanges`]: https://komore.dev/modules/web#fullscreen-changes
[`watchgamepad`]: https://komore.dev/modules/web/gamepad
[`watchintersections`]: https://komore.dev/modules/web/observer#intersection
[`watchmutations`]: https://komore.dev/modules/web/observer#mutation
[`watchpagevisibility`]: https://komore.dev/modules/web#page-visibility
[`watchposition`]: https://komore.dev/modules/web/geolocation
[`watchresizes`]: https://komore.dev/modules/web/observer#resize
[authentication api]: ./TODO
[bluetooth api]: ./TODO
[fetch api]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[fullscreen api]: https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
[gamepad api]: https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API
[geolocation api]: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
[html sanitizer api]: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API
[image capture api]: https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API
[indexeddb api]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[intersection observer api]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
[mutation observer api]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
[page visibility api]: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
[picture-in-picture api]: https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API
[push api]: https://developer.mozilla.org/en-US/docs/Web/API/Push_API
[resize observer api]: https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API
[screen capture api]: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API
[screen wake lock api]: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API
[server-sent events api]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events
[vibration api]: https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API
[websocket api]: https://developer.mozilla.org/en-US/docs/Web/API/Websockets_API
