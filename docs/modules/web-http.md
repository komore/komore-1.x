# HTTP Client

TODO

## Create an HTTP client

TODO

```ts
import { createHttpClient } from '@komore/http';

const httpClient = createHttpClient();
```

## Observe progress

```ts
import { withProgress } from '@komore/http';

httpClient({ method: 'GET', url: '/' }).pipe(withProgress());
```
