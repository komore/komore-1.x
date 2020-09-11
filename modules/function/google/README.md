# komore Function Module (Google)

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
