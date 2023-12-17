# @komore/function-gcloud

Support for the Google Cloud Function execution environment.

## Usage

The provider is passed via the function configuration:

```typescript
import { GoogleFunctionProvider } from '@komore/function/google';

export const exampleFunction = createFunction({ providers: [GoogleFunctionProvider] }).pipe(
  tap(({ message }) => console.log('message', message)),
  mapTo({ hello: 'world' })
);
```

TODO:

- Cloud Endpoinds OpenAPI is equivalent to API gateway
- HTTP functions = Lambda Function URL

TODO: https://itnext.io/gcp-cloud-functions-gen-2nd-pub-sub-development-testing-2c498fa4464e

TODO: remove
