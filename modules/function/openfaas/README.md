# komore OpenFaaS Function Environment Module

Support for the [OpenFaaS] execution environment.

## Usage

The provider is passed via the function configuration:

```typescript
import { OpenFaaSFunctionProvider } from '@komore/function/openfaas';

export const exampleFunction = createFunction({ providers: [OpenFaaSFunctionProvider] }).pipe(
  tap(({ message }) => console.log('message', message)),
  mapTo({ hello: 'world' })
);
```
