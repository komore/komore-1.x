# HTTP Client Operators

The [HTTP client module] offers basic support for observable, cancellable HTTP requests.

Operators allow composing a higher-level abstraction.

## Response transformation

The HTTP client emits a response as soon as it is available, even if the response payload has not been completely
downloaded yet.

A number of operators simplify the process of obtaining a full response payload.

### Response as JSON

A common scenario for HTTP clients is to use JSON-based APIs.

`responseAsJson<T>()` creates an operator function that turns a response payload into a JSON object:

```ts
import { responseAsJson } from '@komore/web/http/operators';

response$.pipe(
  responseAsJson<T>()
);
```

The generic `T` parameter allows selecting the type of emitted values.

By default, emitted values have a `Record<string, unknown>` type.

### Response as text

`responseAsText()` creates an operator function that turns a response into a textual representation of its payload:

```ts
import { responseAsText } from '@komore/web/http/operators';

response$.pipe(
  responseAsText()
); // Observable<string>
```

`withResponseAsText()` creates an operator function that turns a reponse into a tuple with the response and a textual
representation of the response's payload:

```ts
import { withResponseAsText } from '@komore/web/http/operators';

response$.pipe(
  withResponseAsText()
); // Observable<[Response, string]>
```

### Response as blob

`responseAsBlob()` creates an operator function that turns a response into a [blob] representation of its payload:

```ts
import { responseAsBlob } from '@komore/web/http/operators';

response$.pipe(
  responseAsBlob()
); // Observable<Blob>
```

`withResponseAsBlob()` creates an operator function that turns a response into a tuple with the response and a [blob]
representation of the response's payload:

```ts
import { withResponseAsBlob } from '@komore/web/http/operators';

response$.pipe(
  withResponseAsBlob()
); // Observable<[Response, Blob]>
```

## Response progress

TODO

[blob]: https://developer.mozilla.org/en-US/docs/Web/API/Blob
[HTTP client module]: ./web-http.md
[response's download progress]: #response-progress
